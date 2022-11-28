const container = document.querySelector(".container"); // select container

const gridNumber = parseInt("16");

function createGrid(gridNumber) {
  for (let i = 0; i < gridNumber; i++) {
    // creating te grid
    for (let j = 0; j < gridNumber; j++) {
      const div = document.createElement("div"); // createElement
      div.classList.add("grid");
      //console.log("div: " + i);
      container.appendChild(div);

      const grid = document.querySelectorAll(".grid");
      //console.log(grid);

      // add background color on hover
      grid.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.add("hover");
        });
      });
    }
  }

  container.style.setProperty(
    "grid-template-columns",
    "repeat(" + gridNumber + ", auto)"
  );
}

// remove grid function
function removeGrid() {
  const grid = document.querySelectorAll(".grid");

  grid.forEach((element) => {
    container.removeChild(element);
  });
}
createGrid(gridNumber);
createButton();

// create button and update grid
function createButton() {
  const button = document.createElement("button");
  const body = document.querySelector("body");
  button.innerText = "Enter Grid Number";
  button.classList.add("btn");
  body.insertBefore(button, container);
  button.addEventListener("click", function () {
    let newGridNumber = parseInt(prompt());
    if (newGridNumber > 50) {
      window.alert("Please enter a grid number below 50");
      removeGrid();
      removeButton();
      createGrid(gridNumber);
      createButton();
    } else {
      removeGrid();
      createGrid(newGridNumber);
    }
  });
}

// remove button function
function removeButton() {
  const button = document.querySelector("button");
  body.removeChild(button);
}

// create button for grid number prompt

// remove background color on leave
// grid.forEach((element) => {
//   element.addEventListener("mouseleave", () => {
//     element.classList.remove("hover");
//   });
// });
