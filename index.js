const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll('.link');
const body = document.querySelector('.body');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-wrap');

document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
  cursor.style.top = e.clientY + "px";
});

links.forEach(item => {
  item.addEventListener("mouseenter", () => {
    cursor.classList.add('hover');
  })
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove('hover');
  });
});

links.forEach(item => {
  item.addEventListener("click", () => {
    cursor.classList.add('click');
  })
});

dark.addEventListener('click', () => {
  light.classList.remove('dark-theme');
  light.classList.remove('active-theme');
  body.classList.add('dark-theme');
  dark.classList.add('active-theme');
})

light.addEventListener('click', () => {
  dark.classList.remove('dark-theme');
  dark.classList.remove('active-theme');
  body.classList.remove('dark-theme');
  light.classList.add('active-theme');
})

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('opac');
})

