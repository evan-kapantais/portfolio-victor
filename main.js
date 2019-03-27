window.addEventListener("scroll", shrinkNavbar);

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