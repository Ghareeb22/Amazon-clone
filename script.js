const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

prev_btn.addEventListener("click", function () {
  n = (n - 1 + imgs.length) % imgs.length;
  changeSlide();
});

next_btn.addEventListener("click", function () {
  n = (n + 1) % imgs.length;
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
