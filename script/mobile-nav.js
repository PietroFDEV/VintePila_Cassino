class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 1.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  function changeClass() {
    document.getElementById("figure-hover").classList.toggle("display-block");
}

const randomNumber1 = parseInt(Math.random() * 255);
const randomNumber2 = parseInt(Math.random() * 255);
const randomNumber3 = parseInt(Math.random() * 255);

const containerBtn =
document.querySelector(".container-btn");
containerBtn.style.setProperty('--random-color1', randomNumber1);
containerBtn.style.setProperty('--random-color2', randomNumber2);
containerBtn.style.setProperty('--random-color3', randomNumber3);

const containerBtnClass =
document.querySelector("#bk-random");
containerBtnClass.style.setProperty('--random-color2', randomNumber1);
containerBtnClass.style.setProperty('--random-color3', randomNumber2);
containerBtnClass.style.setProperty('--random-color1', randomNumber3);
// background: linear-gradient(rgba(var(--random-color1), var(--random-color2), var(--random-color3), 0.11)50%,rgba(var(--random-color1), var(--random-color2), var(--random-color3), 0.726)) ;