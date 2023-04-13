const container = document.getElementsByClassName('board_container');

//create 16x16 grid
for(var i = 0; i < 16; i++)
    for(var j = 0; j < 16; j++)
    {
        //create div element
        const div = document.createElement('div');

        //add div element to class list
        div.classList.add('cell');

        //add cell to container
        container.appendChild(div);

    }