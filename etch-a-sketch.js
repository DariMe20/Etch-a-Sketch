const container = document.querySelector('.board_container'); // Access the first element with class 'board_container'

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

const cells = document.getElementsByClassName('cell'); /*the array of cells*/
const color = document.getElementsByClassName('color');
const CustomColor = document.getElementById('chooseColor');
const RangeInput = document.getElementById('InputRangeId');
const RangeOutput = document.getElementById("OutputRangeId");

//Add event listeners to cell
for(let i=0; i<cells.length; i++)
{
   {
   cells[i].addEventListener('mouseover', changeColor);

   //Function to change color
   function changeColor(event, color){
    event.target.style.backgroundColor = color.value;
   }

}

// Function to reset the board
function resetBoard() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white'; // Reset cell color to white
    }
} 
}
