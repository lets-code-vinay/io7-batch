const mainContainer = document.querySelector(".main-container");

const rec = mainContainer.querySelector(".rectangle");

const clickBtn = mainContainer.querySelector(".click");
console.log("rec", rec, clickBtn);

clickBtn.addEventListener("click", handleClick);

function handleClick(event) {
  // Get the computed background color of the .rectangle element
  const color = window.getComputedStyle(rec).backgroundColor;
  console.log("Rectangle color:", color);
  if (color === "red" || color === "rgb(255, 0, 0)") {
    // If the rectangle is red, change it to blue
    rec.style.backgroundColor = "blue";
    rec.style.borderRadius = "50%";
  } else {
    // If the rectangle is not red, change it back to red
    rec.style.backgroundColor = "red";
  }
}

/**
 * 1. rectangle element color get
 * 2. Store that inside the variable
 * 3. on click on button.
 * 4. first check if the color is matching with the stored color
 * 5. if color is matching then change color
 * 6. else change color to stored color
 */

//------------
const [recDark] = document.getElementsByClassName("rectangle-dark");
const [dblClickBtn] = document.getElementsByClassName("click-dbl");

dblClickBtn.addEventListener("dblclick", handleDblClick);
function handleDblClick(event) {
  console.log("dblClickBtn", event);
  recDark.style.backgroundColor = "yellow";
}

recDark.addEventListener("mouseover", function () {
  console.log("Mouse over the rectangle-dark");
  recDark.style.backgroundColor = "blue";
  recDark.style.borderRadius = "50%";
  recDark.innerText = "";
});

recDark.addEventListener("mouseleave", function () {
  recDark.style.backgroundColor = "red";
  recDark.style.borderRadius = "0%";
  recDark.style.margin = "auto";
  recDark.style.padding = "10%";

  recDark.innerText = "Mouse";
});
