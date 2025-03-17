document.addEventListener("DOMContentLoaded", function () {
    const eventosContainer = document.getElementById("eventosContainer");

    eventos.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>
                    <span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time}
                    <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}
                </p>
            </div>
        `;

        eventosContainer.appendChild(card);
    });
});
