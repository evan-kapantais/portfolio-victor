window.addEventListener("scroll", shrinkNavbar);
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-icon");
const gameCards = document.querySelectorAll(".game");

for (gameCard of gameCards) {
  gameCard.addEventListener("click", initModal);
}

function initModal(e) {
  const name = e.target.getAttribute("data-name");
  console.log(name);
  
  if (name == "cd") {
    new Modal("cd", ["ios", "android"], "Champions Destiny", "lorem ipsum whatever", "https://www.youtube.com/watch?v=dR2uQaNlUs8");
  }
}

class Modal {
  constructor(icon, platforms, title, description, videoSrc){
    this.icon = "img/" + icon + "-icon.jpg"; // ml-icon.jpg
    this.platforms = [...platforms];  // ["ios.jpg", "android.jpg"]
    this.title = title; // "Monster Lenegds"
    this.description = description; // "lorem10"
    this.videoSrc = videoSrc; // "https://www.monsterlegendsgame.com/videos/ML-Spot.mp4"
    this.close();
    this.init();
  }

  close() {
    modal.style.visibility = "hidden";
  }

  init() {
    modal.style.visibility = "visible";

    const title = document.querySelector(".modal-heading");
    title.innerText = this.title;

    const icon = document.querySelector(".modal-icon");
    icon.setAttribute("src", this.icon);

    const video = document.querySelector("video");
    video.setAttribute("src", this.videoSrc);
    console.log(video.src);
  }
}

function shrinkNavbar() {

  let navbar = document.getElementsByClassName("navbar")[0];

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.style.padding = "2em 4em";
    navbar.style.background = "rgba(0, 0, 0, .9)";
  } else {
    navbar.style.padding = "4em";
    navbar.style.background = "initial";
  }
}