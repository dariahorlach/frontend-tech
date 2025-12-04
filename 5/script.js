document.getElementById("checkBtn").addEventListener("click", function () {
  const pib = document.getElementById("pib");
  const variant = document.getElementById("variant");
  const group = document.getElementById("group");
  const phone = document.getElementById("phone");
  const idcard = document.getElementById("idcard");

  let isValid = true;

  [pib, variant, group, phone, idcard].forEach((el) =>
    el.classList.remove("error")
  );

  const regexPIB = /^[А-ЯІЇЄҐ][а-яіїєґ']+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
  const regexVariant = /^[0-9]{2}$/;
  const regexGroup = /^[А-ЯІЇЄҐ]{2}-[0-9]{2}$/;
  const regexPhone = /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  const regexID = /^[А-ЯІЇЄҐ]{2} №[0-9]{6}$/;

  if (!regexPIB.test(pib.value)) {
    pib.classList.add("error");
    isValid = false;
  }
  if (!regexVariant.test(variant.value)) {
    variant.classList.add("error");
    isValid = false;
  }
  if (!regexGroup.test(group.value)) {
    group.classList.add("error");
    isValid = false;
  }
  if (!regexPhone.test(phone.value)) {
    phone.classList.add("error");
    isValid = false;
  }
  if (!regexID.test(idcard.value)) {
    idcard.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    alert(
      "Введена інформація:\n\n" +
        "ПІБ: " +
        pib.value +
        "\n" +
        "Варіант: " +
        variant.value +
        "\n" +
        "Група: " +
        group.value +
        "\n" +
        "Телефон: " +
        phone.value +
        "\n" +
        "ID-card: " +
        idcard.value
    );
  } else {
    alert("Є помилки у формі! Невірно заповнені поля виділено червоним.");
  }
});

const variantCellNumber = 1;

const table = document.getElementById("table");
let number = 1;

for (let row = 0; row < 6; row++) {
  const tr = document.createElement("tr");

  for (let col = 0; col < 6; col++) {
    const td = document.createElement("td");
    td.textContent = number;

    if (number === variantCellNumber) {
      td.addEventListener("mouseover", () => {
        td.style.backgroundColor = getRandomColor();
      });

      td.addEventListener("click", () => {
        const chosenColor = document.getElementById("colorPicker").value;
        td.style.backgroundColor = chosenColor;
      });

      td.addEventListener("dblclick", () => {
        const chosenColor = document.getElementById("colorPicker").value;
        const rowCells = td.parentNode.children;
        for (let cell of rowCells) {
          cell.style.backgroundColor = chosenColor;
        }
      });
    }

    tr.appendChild(td);
    number++;
  }
  table.appendChild(tr);
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
