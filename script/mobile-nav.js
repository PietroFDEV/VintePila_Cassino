// nav-bar-mobile

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
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
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
  ".nav-list-two",
  ".nav-list-two li",
);
mobileNavbar.init();

// hover-img

  function changeClass() {
    document.getElementById("figure-hover").classList.toggle("display-block");
}

const randomNumber1 = parseInt(Math.random() * 255);
const randomNumber2 = parseInt(Math.random() * 255);
const randomNumber3 = parseInt(Math.random() * 255);
document.documentElement.style.setProperty('--random-color1', randomNumber1);
document.documentElement.style.setProperty('--random-color2', randomNumber2);
document.documentElement.style.setProperty('--random-color3', randomNumber3);

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

var buttonB = document.getElementById("action-btnB");

buttonB.addEventListener("click", function(){
    
    var containerB = document.getElementById("containerB");

    containerB.classList.toggle("hide");
})

var button = document.getElementById("action-btn");

button.addEventListener("click", function(){
    
    var container = document.getElementById("container");

    container.classList.toggle("hide");
})

let list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active');
  }
list.forEach((item) => 
  item.addEventListener('click',activeLink)
)