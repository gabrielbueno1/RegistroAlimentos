document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("food-form");
    const foodList = document.getElementById("food-list");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const foodName = document.getElementById("food-name").value;
        const expiryDate = document.getElementById("expiry-date").value;

        if (foodName && expiryDate) {
            const listItem = document.createElement("div");
            listItem.classList.add("food-item");
            listItem.innerHTML = `
                <h2>${foodName}</h2>
                <p><strong>Data de Validade:</strong> ${expiryDate}</p>
            `;
            foodList.appendChild(listItem);

            // Limpar campos do formulário
            document.getElementById("food-name").value = "";
            document.getElementById("expiry-date").value = "";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
