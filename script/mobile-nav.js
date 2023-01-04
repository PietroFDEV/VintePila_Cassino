class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, navList2) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navList2 = document.querySelector(navList2);
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
      this.navList2.classList.toggle(this.activeClass);
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
document.documentElement.style.setProperty('--random-color1', randomNumber1);
document.documentElement.style.setProperty('--random-color2', randomNumber2);
document.documentElement.style.setProperty('--random-color3', randomNumber3);