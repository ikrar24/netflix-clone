const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
let allImg = document.querySelectorAll(".trendingImgs");
const qBtn = document.querySelector(".questionBox1");
const qBtn2 = document.querySelector(".questionBox2");
const qBtn3 = document.querySelector(".questionBox3");
const qBtn4 = document.querySelector(".questionBox4");
const qBtn5 = document.querySelector(".questionBox5");
const qBtn6 = document.querySelector(".questionBox6");
const ansBox = document.querySelector(".ansBox1");
const ansBox2 = document.querySelector(".ansBox2");
const ansBox3 = document.querySelector(".ansBox3");
const ansBox4 = document.querySelector(".ansBox4");
const ansBox5 = document.querySelector(".ansBox5");
const ansBox6 = document.querySelector(".ansBox6");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");
const icon4 = document.querySelector(".icon4");
const icon5 = document.querySelector(".icon5");
const icon6 = document.querySelector(".icon6");
const iconImg = document.querySelector(".iconImg");
const iconImg2 = document.querySelector(".iconImg2");
const iconImg3 = document.querySelector(".iconImg3");
const iconImg4 = document.querySelector(".iconImg4");
const iconImg5 = document.querySelector(".iconImg5");
const iconImg6 = document.querySelector(".iconImg6");
const startbtn = document.querySelector(".finalGetStarted");
const startbtn2 = document.querySelector(".getStarted");
const singInBtn = document.querySelector(".singIn");
const fixedSingInBtn = document.querySelector(".singinbtn");

let counter = 0;

rightBtn.addEventListener("click", () => {
  counter++;

  if (counter > 9) {
    counter = 0;
  }

  if (counter > 1) {
    leftBtn.style.display = "flex";
  } else {
    leftBtn.style.display = "none";
  }

  // transform: translateX();
  allImg.forEach((img) => {
    img.style.transform = `translateX(${counter * -91}%)`;
  });
});

leftBtn.addEventListener("click", () => {
  counter = 0;

  // transform: translateX();
  allImg.forEach((img) => {
    img.style.transform = `translateX(${0 * 100}%)`;
  });
  if (counter > 1) {
    leftBtn.style.display = "flex";
  } else {
    leftBtn.style.display = "none";
  }
});

qBtn.addEventListener("click", () => {
  if (ansBox.style.display === "none") {
    ansBox.style.display = "block";
    iconImg.style.display = "block";
    icon1.style.display = "none";
  } else {
    ansBox.style.display = "none";
    icon1.style.display = "block";
    iconImg.style.display = "none";
  }
});

qBtn2.addEventListener("click", () => {
  if (ansBox2.style.display === "none") {
    ansBox2.style.display = "block";
    icon2.style.display = "none";
    iconImg2.style.display = "block";
  } else {
    ansBox2.style.display = "none";
    icon2.style.display = "block";
    iconImg2.style.display = "none";
  }
});

qBtn3.addEventListener("click", () => {
  if (ansBox3.style.display === "none") {
    ansBox3.style.display = "block";
    icon3.style.display = "none";
    iconImg3.style.display = "block";
  } else {
    ansBox3.style.display = "none";
    icon3.style.display = "block";
    iconImg3.style.display = "none";
  }
});

qBtn4.addEventListener("click", () => {
  if (ansBox4.style.display === "none") {
    ansBox4.style.display = "block";
    icon4.style.display = "none";
    iconImg4.style.display = "block";
  } else {
    ansBox4.style.display = "none";
    icon4.style.display = "block";
    iconImg4.style.display = "none";
  }
});

qBtn5.addEventListener("click", () => {
  if (ansBox5.style.display === "none") {
    ansBox5.style.display = "block";
    icon5.style.display = "none";
    iconImg5.style.display = "block";
  } else {
    ansBox5.style.display = "none";
    icon5.style.display = "block";
    iconImg5.style.display = "none";
  }
});

qBtn6.addEventListener("click", () => {
  if (ansBox6.style.display === "none") {
    ansBox6.style.display = "block";
    icon6.style.display = "none";
    iconImg6.style.display = "block";
  } else {
    ansBox6.style.display = "none";
    icon6.style.display = "block";
    iconImg6.style.display = "none";
  }
});

startbtn.addEventListener("click", () => {
  alert("This page is only front-end base.");
});

startbtn2.addEventListener("click", () => {
  alert("This page is only front-end base.");
});

singInBtn.addEventListener("click", () => {
  alert("This page is only front-end base.");
});

window.addEventListener("scroll", (e) => {
  if (pageYOffset > 400) {
    fixedSingInBtn.style.display = "flex";
  } else {
    fixedSingInBtn.style.display = "none";
  }

  if (pageYOffset > 2000) {
    fixedSingInBtn.style.display = "none";
  }

  if (pageYOffset > 2749) {
    fixedSingInBtn.style.display = "flex";
  }
});

fixedSingInBtn.addEventListener("click", () => {
  alert("This page is only front-end base.");
});
