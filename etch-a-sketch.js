const container = document.getElementsByClassName('board_container')[0]; // Access the first element with class 'board_container'

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