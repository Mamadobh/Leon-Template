let menu_element = document.querySelector("#option");
let icn_element = document.querySelector("#menu");
let element_to_up = document.querySelector(".to_up");
let mega_menu = document.querySelector("#icn");

icn_element.onclick = function () {
  menu_element.classList.toggle("displayed");
  mega_menu.classList.toggle("move_left");
  // console.log(document.body.children.nodeName);
};
window.onscroll = function () {
  if (document.documentElement.scrollTop > 45) {
    element_to_up.style.display = "block";
  } else {
    element_to_up.style.display = "none";
  }
};
element_to_up.onclick = function () {
  window.scrollTo({ let: 0, top: 0, behavior: "smooth" });
};
