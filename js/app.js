let navBar = document.querySelector(".navBarMain .navLinks");
let menuBtn = document.querySelector("#btn-menu");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuBtn.classList.toggle("bx-x")
});

document.addEventListener("click", (event) => {
	if (event.target.closest(".header") || event.target.closest(".navBarMain") ) {
		return;
	}
	navBar.classList.remove("active");
	menuBtn.classList.remove("bx-x");
});

let navLinks = document.querySelector(".navLinks");
let desplega1 = document.querySelector(".acti1");
let desplega2 = document.querySelector(".acti2");
let desplega3 = document.querySelector(".acti3");

desplega1.onclick = function () {
    navLinks.classList.toggle("show1")
}
desplega2.onclick = function () {
    navLinks.classList.toggle("show2")
}
desplega3.onclick = function () {
    navLinks.classList.toggle("show3")
}




let topBtn = document.querySelector(".btnSubir");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "inline";
    } else {
        topBtn.style.display = "none";
    }
}


