let n = 1;
let firstIndex = (n % 10) + 1;

let firstElement = document.getElementById("el" + firstIndex);
let secondElement = document.querySelector("#el" + (firstIndex + 1));

function toggleColors(element) {
  if (!element) return;

  if (element.style.backgroundColor === "yellow") {
    element.style.backgroundColor = "";
    element.style.color = "";
  } else {
    element.style.backgroundColor = "yellow";
    element.style.color = "red";
  }
}

firstElement.addEventListener("click", () => {
  toggleColors(firstElement);
});

secondElement.addEventListener("click", () => {
  toggleColors(secondElement);
});

const imgWrapper = document.querySelector(".img-wrapper");

document.getElementById("addBtn").onclick = function () {
  if (!document.getElementById("cityImg")) {
    const img = document.createElement("img");
    img.src = "./images/barcelona.jpg";
    img.id = "cityImg";
    img.style.width = "450px";
    imgWrapper.appendChild(img);
  }
};

document.getElementById("incBtn").onclick = function () {
  let img = document.getElementById("cityImg");
  if (img) {
    img.style.width = parseInt(img.style.width) + 50 + "px";
  }
};

document.getElementById("decBtn").onclick = function () {
  let img = document.getElementById("cityImg");
  if (img) {
    img.style.width = parseInt(img.style.width) - 50 + "px";
  }
};

document.getElementById("removeBtn").onclick = function () {
  let img = document.getElementById("cityImg");
  if (img) img.remove();
};
