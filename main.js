window.addEventListener("scroll", shrinkNavbar);
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-icon");
const gameCards = document.querySelectorAll(".game");

for (gameCard of gameCards) {
  gameCard.addEventListener("click", initModal);
}

function initModal(e) {
  const gameName = e.target.getAttribute("data-name");
  setModalContent(gameName);
  showModal();
  closeBtn.onclick = hideModal;
}

function showModal() {
  modal.style.visibility = "visible";
  closeBtn.style.width = "20px";
  document.querySelector(".container").classList.add("body-dark");

  for (gameCard of gameCards) {
    gameCard.removeEventListener("click", initModal);
  }
}

function hideModal() {
  modal.style.visibility = "hidden";
  this.style.width = "0px";

  for (gameCard of gameCards) {
    gameCard.addEventListener("click", initModal);
  }
}

function setModalContent(gameName) {

  const modalTitle = document.querySelector(".modal-heading");
  // const modalIcon = document.querySelector(".modal-icon");
  const modalDescription = document.querySelector(".modal-description");
  const modalVideo = document.querySelector(".modal-video");

  if (gameName == "cd") {
    modalTitle.innerText = "Champions Destiny";
    // modalIcon.setAttribute("src", "img/cd-icon.jpg");
    modalDescription.innerText = "This is Champions Destiny";
    // modalVideo.setAttribute("src", "https://www.youtube.com/watch?v=dR2uQaNlUs8");
  }
}

function shrinkNavbar() {

  let navbar = document.querySelector(".navbar");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.classList.add("shown");
  } else {
    navbar.classList.remove("shown");
  }
}