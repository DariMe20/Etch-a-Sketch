//Access container, colors, custom color imput and output from html document  
const container = document.querySelector('.board_container');
const colorsDiv = document.getElementsByClassName('color');
const CustomColor = document.getElementById('chooseColor');
const RangeInput = document.getElementById('InputRangeId');
const RangeOutput = document.getElementById("OutputRangeId");
const saveBtn = document.getElementById("");
var theColor;

// Add event listener to range input
RangeInput.addEventListener('input', ChangeGridSize);

CreateGrid(16);

//function that creates a grid
function CreateGrid(size) {

    //initialize empty container
    container.innerHTML = '';

    // Create new grid with specified size
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //create cells inside grid 
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            // Create div element
            const div = document.createElement('div');

            // Add div element to class list
            div.classList.add('cell');


            // Add event listener to cell
            div.addEventListener('mouseover', function (event) {
                changeColor(event, theColor);
            });

            // Add cell to container
            container.appendChild(div);
        }
    }
}

//Add event listeners for color divs
for (let i = 0; i < colorsDiv.length; i++) {
    colorsDiv[i].addEventListener('click', function (event) {
        theColor = event.target.dataset.clr;
    });
}

//Add event listener for custom input color
CustomColor.addEventListener('input', function (event) {
    theColor = event.target.value;
})

//Function to change color
function changeColor(event, theColor) {
    event.target.style.backgroundColor = theColor;
}

// Function to reset the board
function resetBoard() {
    const cells = container.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
}

//Update grid size based on Range Input 
function ChangeGridSize() {

    //get range input from document
    const size = RangeInput.value;

    //update output range with size
    document.getElementById('OutputRangeId').textContent = size;

    //generate the new grid 
    CreateGrid(size);
}

// Function to save the drawing in clipboard
function saveBoard() {
    
    // Create a canvas layout
    const canvas = document.createElement('canvas');

    // Get size of container
    const containerRect = container.getBoundingClientRect();

    // Set canvas dimensions to match the container
    canvas.width = containerRect.width;
    canvas.height = containerRect.height;

    // Get the canvas context
    const ctx = canvas.getContext('2d');

    // Loop through each cell in the container
    const cells = container.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {

        // Get the cell position and color
        const cellRect = cells[i].getBoundingClientRect();

        // Get the horizontal index position
        const x = cellRect.left - containerRect.left;

        // Get the vertical index position
        const y = cellRect.top - containerRect.top;

        //get color 
        const color = cells[i].style.backgroundColor;

        // Check if color has a valid value, otherwise set it to white
        if (!color) {
            ctx.fillStyle = "white";
        } else {
            ctx.fillStyle = color;
        }

        ctx.fillRect(x, y, cells[i].offsetWidth, cells[i].offsetHeight);
    }

    // Convert canvas to a data URL
    const dataURL = canvas.toDataURL('image/png');

    // Create a temporary link element to download the image
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'Etch-a-Sketch.png';
    a.target = '_blank';

    // To download the image - trigger a link event on element a
    a.dispatchEvent(new MouseEvent('click'));

    // Open the image in a new window
    window.open(dataURL, '_blank');
}