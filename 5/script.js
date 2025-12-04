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
