//Access container, colors, custom color imput and output from html document  
const container = document.querySelector('.board_container');
const colorsDiv = document.getElementsByClassName('color');
const CustomColor = document.getElementById('chooseColor');
const RangeInput = document.getElementById('InputRangeId');
const RangeOutput = document.getElementById("OutputRangeId");

// Create 16x16 grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        // Create div element
        const div = document.createElement('div');

        // Add div element to class list
        div.classList.add('cell');

        // Add cell to container
        container.appendChild(div);
    }
}

//Access cells 
const cells = document.getElementsByClassName('cell');

//Add event listeners to cell
for (let i = 0; i < cells.length; i++) {
    //Event listener to change colors on mouse hover
    cells[i].addEventListener('mouseover', function (event) {
        changeColor(event, theColor);
    });
}

//Add event listeners for color divs
for (let i = 0; i < colorsDiv.length; i++) {
    colorsDiv[i].addEventListener('click', function(event){
        theColor = event.target.dataset.clr;
    });
}

//Add 
//Function to change color
function changeColor(event, theColor){
    event.target.style.backgroundColor = theColor;
}

// Function to reset the board
function resetBoard() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
} 

