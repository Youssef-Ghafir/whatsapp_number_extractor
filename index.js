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
      const spans = e.querySelectorAll('span');
      if (spans.length === 0) return;

      const result =
        spans[0].className === ''
          ? spans[1]?.getAttribute('title')
          : spans[0]?.getAttribute('title');

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
