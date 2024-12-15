// Create a button
const button = document.createElement('button');
button.innerText = 'E起學小幫手';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '1000';
button.style.padding = '10px 20px';
button.style.backgroundColor = '#4b0082';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

// Append the button to the body
document.body.appendChild(button);

button.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "open_popup" });
});