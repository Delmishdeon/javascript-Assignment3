// Get reference to the button, text elements, and body
const colorButton = document.getElementById('colorButton');
const changeableText = document.getElementById('changeableText');
const textInput = document.getElementById('textInput');
const dynamicText = document.getElementById('dynamicText');
const body = document.body;

// Function to change text color
function changeColor() {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Apply random color to text
    changeableText.style.color = randomColor;
}

// Function to change background color
function changeBackgroundColor() {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Apply random color to background
    body.style.backgroundColor = randomColor;
}

// Function to highlight text on hover
function highlightText() {
    this.classList.toggle('highlight');
}

// Function to update dynamic text
function updateDynamicText() {
    dynamicText.textContent = textInput.value;
}

// Event listener for button click to change text color
colorButton.addEventListener('click', changeColor);

// Event listener for text input to update dynamic text
textInput.addEventListener('input', updateDynamicText);

// Event listener for text hover to highlight text
changeableText.addEventListener('mouseenter', highlightText);
changeableText.addEventListener('mouseleave', highlightText);

// Change background color randomly every 3 seconds
setInterval(changeBackgroundColor, 3000);
