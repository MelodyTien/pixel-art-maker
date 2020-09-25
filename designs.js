// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    var height = document.querySelector('#inputHeight').value;
    var width = document.querySelector('#inputWidth').value;

       // Clear the original rows
    table.style.backgroundColor = 'white';
    while(table.rows.length !== 0){
      table.deleteRow(-1); //delete the last row of the table
    }

    // Make grid depends on user's input
    for (var rowIndex = 0; rowIndex < height; rowIndex++){
      var row = table.insertRow();
      for (var columnIndex = 0; columnIndex < width; columnIndex++){
        row.insertCell();
      }
    }

    event.preventDefault();
}

function colorCell(event){
  if (event.target.nodeName === 'TD'){
    var color = document.querySelector('#colorPicker').value;
    event.target.style.backgroundColor = color;
    console.log(event.target);
    console.log(color);
  }
}

var table = document.querySelector("#pixelCanvas");
var form = document.querySelector("#sizePicker");
table.addEventListener('click', colorCell);
form.addEventListener('submit', makeGrid);
