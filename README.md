# WhatsApp Number Extractor

A JavaScript utility function that extracts phone numbers from WhatsApp Web's contact list or group members interface.

## 📋 Description

This script automatically scrolls through WhatsApp Web's interface and extracts all visible phone numbers. It's designed to work with WhatsApp Web's DOM structure and can be used in the browser console.

## ✨ Features

- 🔍 Automatically extracts phone numbers from WhatsApp Web interface
- 📜 Dynamic scrolling to load and extract all numbers
- 🎯 Removes duplicates using a Set data structure
- 📊 Real-time console logging of found numbers
- ⚡ Lightweight and easy to use

## 🚀 Usage

1. Open [WhatsApp Web](https://web.whatsapp.com/) in your browser
2. Navigate to a contact list or group members page
3. Open your browser's Developer Console (F12 or Right-click → Inspect → Console)
4. Copy and paste the entire `index.js` file content into the console
5. Run the function:
   ```javascript
   extractAllWhatsappNumbers();
   ```
6. The script will automatically scroll through all items and extract phone numbers
7. Check the console for found numbers and the final collection

## 📝 How It Works

1. **Container Detection**: Finds the WhatsApp Web container using a CSS selector
2. **Number Extraction**: Extracts phone numbers from visible items by reading the `title` attribute from specific span elements
3. **Dynamic Scrolling**: Automatically scrolls down the container to load more items
4. **Duplicate Prevention**: Uses a JavaScript `Set` to ensure each number is only collected once
5. **Completion**: Stops when no more items can be loaded

## ⚠️ Important Notes

- **Privacy & Ethics**: Only use this tool on contact lists or groups you have permission to access
- **WhatsApp Terms**: Ensure your usage complies with WhatsApp's Terms of Service
- **DOM Changes**: WhatsApp Web may update their interface, which could break the selectors. You may need to update the CSS selectors if WhatsApp changes their DOM structure
- **Browser Compatibility**: Works best in modern browsers (Chrome, Firefox, Edge)

## 🔧 Customization

If WhatsApp updates their interface and the script stops working, you may need to update the CSS selectors:

- Container selector: `.x1n2onr6 div header + div + div`
- Item selector: `div._ak72`

Use your browser's Developer Tools to inspect the current DOM structure and update these selectors accordingly.

## 📄 License

This project is open source and available for public use. Please use responsibly and in accordance with applicable laws and terms of service.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## ⚡ Quick Start Example

```javascript
// After pasting the function in console:
const numbers = extractAllWhatsappNumbers();

// The function returns a Set containing all extracted numbers
// You can convert it to an array if needed:
const numbersArray = Array.from(numbers);
console.log('Total unique numbers:', numbersArray.length);
```

---

**Disclaimer**: This tool is for educational purposes. Users are responsible for ensuring their usage complies with all applicable laws, regulations, and terms of service.

