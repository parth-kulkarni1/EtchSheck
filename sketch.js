

const container = document.querySelector('.container');

function arandomColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    console.log(randomColor)

    return randomColor
}


function makeGrid(num_of_rows,num_of_columns){

    for (i = 0; i < num_of_rows; i++){

        const grid_element = document.createElement('div');
        grid_element.classList.add("square-row");

        container.appendChild(grid_element)

        for (j = 0; j < num_of_columns; j++){
            const grid_element_two = document.createElement('div');
            grid_element_two.classList.add("square-column");

            grid_element.appendChild(grid_element_two);

    grid_element_two.addEventListener("mouseover", changeColor);

    function changeColor(){
        grid_element_two.style.backgroundColor="#" + arandomColor()

    }        
}

}
}



makeGrid(16,16)

