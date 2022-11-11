let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  bell.classList.remove("active");
};

// notification

let bell = document.querySelector(".notification");

document.querySelector("#bell-icon").onclick = () => {
  bell.classList.toggle("active");
};

// slider

let trendingContent = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

// scroll bar
window.onscroll = function () {
  mufunction();
};

const mufunction = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};
