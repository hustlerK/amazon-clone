const sideMenu = document.getElementById("sideMenu");
const overlay = document.querySelector(".overlay");
const prime = document.querySelector(".prime");
const scrollBtn = document.getElementById("scrollimg");
const scrollBtn1 = document.getElementById("scrollimg1");
const scrollBtn2 = document.getElementById("scrollimg2");
const scrollBtn3 = document.getElementById("scrollimg3");
const topBar = document.getElementById("top");
const address = document.getElementById("address");
const updateAddress = document.querySelector(".updateAddresses");
const emailLog = document.querySelector("#enterEmailId");
const heroSectionImg = document.getElementsByClassName('hero-section-btn-img');
const heroSection = document.getElementsByClassName('hero-section-btn');
const heroSectionBg = document.getElementsByClassName("hero-section-bg");
const gridContainer = document.getElementsByClassName("gridContainer");
var count = 0;

heroSectionImg[0].addEventListener("click", () => {
    heroSection[0].style.border = '2px solid black';
    heroSection[0].style.borderRadius = "5px";
    heroSectionBg[0].scrollLeft += screen.width;
    heroSection[1].style.border = 'none';
});
function scrollImage() {
    heroSectionBg[0].scrollLeft += screen.width;
    count++;
    if (count == 11) {
        heroSectionBg[0].scrollLeft = 0;
        count = 0;
    }
}
function setTimeInterval() {
    setInterval(scrollImage, 5000);
}




heroSectionImg[1].addEventListener("click", () => {
    heroSection[1].style.border = '2px solid black';
    heroSection[1].style.borderRadius = "5px";
    heroSectionBg[0].scrollLeft -= screen.width;
    heroSection[0].style.border = 'none';
});

heroSectionImg[2].addEventListener("click", () => {
    gridContainer[0].scrollLeft += 150;
});
heroSectionImg[3].addEventListener("click", () => {
    gridContainer[0].scrollLeft -= 150;
});

heroSectionImg[4].addEventListener("click", () => {
    gridContainer[1].scrollLeft += 150;
});
heroSectionImg[5].addEventListener("click", () => {
    gridContainer[1].scrollLeft -= 150;
});

heroSectionImg[6].addEventListener("click", () => {
    gridContainer[2].scrollLeft += 150;
});
heroSectionImg[7].addEventListener("click", () => {
    gridContainer[2].scrollLeft -= 150;
});

heroSectionImg[8].addEventListener("click", () => {
    gridContainer[3].scrollLeft += 150;
});
heroSectionImg[9].addEventListener("click", () => {
    gridContainer[3].scrollLeft -= 150;
});

heroSectionImg[10].addEventListener("click", () => {
    gridContainer[4].scrollLeft += 150;
});
heroSectionImg[11].addEventListener("click", () => {
    gridContainer[4].scrollLeft -= 150;
});


emailLog.addEventListener("click", () => {
    emailLog.classList.add("active");
});

emailLog.addEventListener('mouseleave', () => {
    emailLog.classList.remove("active");
});

address.addEventListener("click", () => {
    updateAddress.classList.add("active");
    overlay.classList.add("overlayactive");
});

function openSideBar() {
    sideMenu.classList.add("active");
    overlay.classList.add("overlayactive");
    document.querySelector(".search-bar").style.zIndex = 0;
}

function closeSideBar() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("overlayactive");
    document.querySelector(".search-bar").style.zIndex = 10;
    updateAddress.classList.remove("active");
}

function openOverLay() {
    overlay.classList.add("overlayactive");
}

function closeOverLay() {
    overlay.classList.remove("overlayactive");
    updateAddress.classList.remove("active");
}

scrollBtn.addEventListener("mouseover", () => {
    document.querySelectorAll(".scrollBtn")[0].classList.add("active");
    document.querySelectorAll(".scrollBtn")[1].classList.add("active");
});
scrollBtn.addEventListener("mouseleave", () => {
    document.querySelectorAll(".scrollBtn")[0].classList.remove("active");
    document.querySelectorAll(".scrollBtn")[1].classList.remove("active");
});

scrollBtn1.addEventListener("mouseover", () => {
    document.querySelectorAll(".secondscrollBtn")[0].classList.add("active");
    document.querySelectorAll(".secondscrollBtn")[1].classList.add("active");
});
scrollBtn1.addEventListener("mouseleave", () => {
    document.querySelectorAll(".secondscrollBtn")[0].classList.remove("active");
    document.querySelectorAll(".secondscrollBtn")[1].classList.remove("active");
});
scrollBtn2.addEventListener("mouseover", () => {
    document.querySelectorAll(".thirdscrollBtn")[0].classList.add("active");
    document.querySelectorAll(".thirdscrollBtn")[1].classList.add("active");
});
scrollBtn2.addEventListener("mouseleave", () => {
    document.querySelectorAll(".thirdscrollBtn")[0].classList.remove("active");
    document.querySelectorAll(".thirdscrollBtn")[1].classList.remove("active");
});
scrollBtn3.addEventListener("mouseover", () => {
    document.querySelectorAll(".fourthscrollBtn")[0].classList.add("active");
    document.querySelectorAll(".fourthscrollBtn")[1].classList.add("active");
});
scrollBtn3.addEventListener("mouseleave", () => {
    document.querySelectorAll(".fourthscrollBtn")[0].classList.remove("active");
    document.querySelectorAll(".fourthscrollBtn")[1].classList.remove("active");
});
