const sizePicker = document.querySelector(".sizePicker");
const tableCanvas = document.querySelector(".tableCanvas");
const colorPicker = document.querySelector(".colorPicker");
const height = document.querySelector(".inputHeight");
const width = document.querySelector(".inputWidth");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function (event) {
  // Clear the table
  tableCanvas.innerHTML = "";
  // Prevent the default action of the form
  event.preventDefault();
  // Call makeGrid() function
  makeGrid(height.value, width.value);
});

// Function to create the grid
function makeGrid(height, width) {
  // Loop through the height and width to create the grid
  for (let row = 0; row < height; row++) {
    // Insert a row
    let rows = tableCanvas.insertRow(0);
    // Loop through the width to insert cells
    for (let column = 0; column < width; column++) {
      // Insert a cell
      let cell = rows.insertCell(0);
      // Add a click event listener to the cell
      cell.addEventListener("click", function () {
        cell.style.backgroundColor = colorPicker.value;
      });
    }
  }
}
