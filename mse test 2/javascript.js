const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const destinationCards = document.querySelectorAll(".destination-card");
const noResults = document.getElementById("noResults");

function searchDestinations() {
    const searchText = searchInput.value.toLowerCase().trim();
    let found = 0;

    destinationCards.forEach(function(card) {
        const destinationName =
            card.querySelector("h3").textContent.toLowerCase();

        if (destinationName.includes(searchText)) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

searchBtn.addEventListener("click", searchDestinations);

searchInput.addEventListener("input", searchDestinations);