let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

let header = document.querySelector(".header");
// change navbar background on scroll
window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// start our carousal

// const carousel = document.querySelector(".slider");
const slides = document.querySelector(".slider-items");
let slide = document.querySelectorAll(".slider-item");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let slideLingth = slide.length;
// console.log(slideLingth);
let currnt = 0;

function nextSlide() {
  currnt++;
  if (currnt > slideLingth - 1) {
    currnt = 0;
  }
  slides.style.transform = `translateX(-${currnt * 100}%)`;
}
function prevSlide() {
  currnt--;
  if (currnt < 0) {
    currnt = slideLingth - 1;
  }
  slides.style.transform = `translateX(-${currnt * 100}%)`;
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// coming soon script

var countDownDate = new Date("Oct 16,2023 12:00:00");
let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
var x = setInterval(function () {
  let timeNow = new Date().getTime();

  let distance = countDownDate - timeNow;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
}, 1000);
