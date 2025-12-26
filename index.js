function extractAllWhatsappNumbers() {
  const numbersPhoneSet = new Set();
  const containerDivNumbers = document.querySelector(
    '.x1n2onr6 div header + div + div'
  );

  if (!containerDivNumbers) {
    console.warn('Container not found!');
    return numbersPhoneSet;
  }

  // Function to extract numbers from currently visible items
  const extractNumbersFromItems = () => {
    const items = containerDivNumbers.querySelectorAll('div._ak72');
    items.forEach(e => {
      const textContentPhone = e.querySelector('._ak8l._ap1_').textContent;
      const result = extractPhoneNumberPattern(textContentPhone);
      if (result) {
        numbersPhoneSet.add(result);
        console.log('Found number:', result);
      }
    });
  };

  // Function to scroll dynamically
  const scrollAndExtract = async () => {
    let lastScrollHeight = 0;
    while (true) {
      extractNumbersFromItems();

      // Scroll down by the container's visible height
      containerDivNumbers.scrollBy(0, containerDivNumbers.clientHeight);

      // Wait a bit for new items to load
      await new Promise(resolve => setTimeout(resolve, 500));

      // Stop scrolling if we reached the bottom
      if (containerDivNumbers.scrollHeight <= lastScrollHeight) break;
      lastScrollHeight += containerDivNumbers.clientHeight;
    }

    console.log('All numbers collected:', numbersPhoneSet);
  };

  scrollAndExtract();

  return numbersPhoneSet;
}
function extractPhoneNumberPattern(text) {
  const regex = /(\+?\d[\d\s\-\.]{7,}\d)/;
  const match = text.match(regex);
  return match ? match[1].replace(/[^\d+]/g, '') : null;
}
