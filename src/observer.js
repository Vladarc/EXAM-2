const SECTIONS = document.querySelectorAll(".section"),
  navMenuItem = document.querySelectorAll(".nav__menu_item");



let options;
function sizesOption() {
  let windowWidth = window.innerWidth;
  return options = {
    root: null,
    rootMargin: windowWidth > 1090 ? "0px 0px 0px 0px" :  "-160px",
    threshold: windowWidth > 1090 ? 0.3 : 0,
  };
}

function handler(myelment, observer) {
  myelment.forEach(function (isElemt) {
    let currentTarget = document.querySelector(
      'li[data-target="' + isElemt.target.id + '"]'
    );


    if (isElemt.isIntersecting) {
      navMenuItem.forEach((el) => el.classList.remove("nav__menu_item-active"));
      currentTarget != null
        ? currentTarget.classList.add("nav__menu_item-active")
        : null;
    }
  });
}

function getSize() {
  if (window.innerWidth >= 900) {
    sizesOption();

    let observer = new IntersectionObserver(handler, options);
    SECTIONS.forEach(function (el) {
      observer.observe(el);
    });
  }
}
getSize();

