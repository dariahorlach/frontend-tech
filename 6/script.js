const container = document.getElementById("userCard");

document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      const picture = user.picture.large;
      const name = `${user.name.first} ${user.name.last}`;
      const cell = user.cell;
      const city = user.location.city;
      const country = user.location.country;

      container.style.display = "flex";

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${picture}" alt="${name}">
        <p><b>Name:</b> ${name}</p>
        <p><b>Cell:</b> ${cell}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Country:</b> ${country}</p>
      `;

      container.appendChild(card);
    })
    .catch((error) => console.error("Помилка отримання даних:", error));
});
