const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  const gamesSection = document.querySelector(".games-grid");
  gamesSection.scrollIntoView({ behavior: "smooth" });
});
