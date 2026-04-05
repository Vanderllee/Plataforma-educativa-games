const startButton = document.getElementById("startButton");
const gamesGrid = document.getElementById("gamesGrid");

function createGameCard(game) {
  const card = document.createElement("article");
  card.className = `game-card ${game.status === "em-breve" ? "disabled" : ""}`;

  const isAvailable = game.status === "disponivel";

  card.innerHTML = `
    <h3>${game.title}</h3>
    <p>${game.description}</p>
    <p class="pedagogical-goal">
      <strong>Objetivo pedagogico:</strong> ${game.pedagogicalGoal}
    </p>
    <div class="card-footer">
      <span class="badge">${game.category}</span>
      <button class="game-button" data-game-id="${game.id}" ${!isAvailable ? "disabled" : ""}>
        ${game.buttonLabel}
      </button>
    </div>
  `;

  return card;
}

function renderGamesCatalog() {
  gamesGrid.innerHTML = "";

  games.forEach((game) => {
    const card = createGameCard(game);
    gamesGrid.appendChild(card);
  });
}

function setupEvents() {
  startButton.addEventListener("click", () => {
    gamesGrid.scrollIntoView({ behavior: "smooth" });
  });

  gamesGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".game-button");

    if (!button || button.disabled) return;

    const gameId = button.dataset.gameId;
    alert(`Voce clicou no jogo: ${gameId}. Na proxima etapa vamos abrir o minigame.`);
  });
}

renderGamesCatalog();
setupEvents();
