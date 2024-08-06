
let menu_icon_box = document.querySelector(".menu_icon-box");
let container = document.querySelector(".container")

menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    container.classList.toggle("active");
}