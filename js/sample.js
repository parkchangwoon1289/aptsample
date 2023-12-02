// 리틀박스 클릭시 하위메뉴박스 토글로 나오게 하는 js
const boxbut = document.querySelector(".littleBox > div");
const boxlist = document.querySelector(".boxlist");

boxbut.addEventListener("click", function(){
    boxbut.classList.toggle("active1"),
    boxlist.classList.toggle("active2")
})
// 리틀박스 클릭시 하위메뉴박스 토글로 나오게 하는 js


// 리틀박스 메뉴 클릭시 리틀박스 사라지게 하는 js
const boxlist00 = document.querySelector(".boxlist");
const boxbut11 = document.querySelector(".boxlist-1");
const boxbut22 = document.querySelector(".boxlist-2");
const boxbut33 = document.querySelector(".boxlist-3");

boxbut11.addEventListener("click", function(){
    boxlist00.classList.remove("active2"),
    boxbut.classList.remove("active1")
})
boxbut22.addEventListener("click", function(){
    boxlist00.classList.remove("active2"),
    boxbut.classList.remove("active1")
})
boxbut33.addEventListener("click", function(){
    boxlist00.classList.remove("active2"),
    boxbut.classList.remove("active1")
})
// 리틀박스 메뉴 클릭시 리틀박스 사라지게 하는 js







// 자동 사진 넘김
var slideIndexA = 0;
    showSlidesA();

    function showSlidesA() {
        var i;
        var slidesA = document.getElementsByClassName("mySlidesA");
       
        for (i = 0; i < slidesA.length; i++) {
            slidesA[i].style.display = "none"
        }
        slideIndexA++;
        if (slideIndexA > slidesA.length) {
            slideIndexA = 1
        }
        slidesA[slideIndexA - 1].style.display = "block";
    
        setTimeout(showSlidesA, 2000); // 2초마다 이미지가 체인지
    }
// 자동 사진 넘김



//swiper 관련
const swiper = new Swiper(".my-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        },
    })
//swiper 관련




// 글자들의 자동 색 변경
const changeA = document.querySelector(".header > a > div > h5");
const changeB = document.querySelector(".main-sec1>h2:last-of-type");
const changeC = document.querySelector(".main-sec1>h2:last-of-type>a");
const changeE = document.querySelector(".footer>div > a:last-of-type");

changeA.classList.toggle("active5");
changeB.classList.toggle("active4");
changeC.classList.toggle("active4");
changeE.classList.toggle("active4");

setInterval(()=>{
    changeA.classList.toggle("active5"),
    changeB.classList.toggle("active4"),
    changeC.classList.toggle("active4"),
    changeE.classList.toggle("active4")
}, 1000)
// 글자들의 자동 색 변경


// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기
const but1 = document.querySelector(".button1");

const but3 = document.querySelector(".button3");
const buttop = document.querySelector(".gotop > div > div");

const subbut1 = document.querySelector(".submenu1");
const subbut2 = document.querySelector(".submenu2");
const subbut3 = document.querySelector(".submenu3");
const subbut4 = document.querySelector(".submenu4");

const littlebut1 = document.querySelector(".boxlist-1");
const littlebut2 = document.querySelector(".boxlist-2");
const littlebut3 = document.querySelector(".boxlist-3");



const but11 = document.querySelector(".main-sec1");

const but33 = document.querySelector(".main-sec6");

const subbut11 = document.querySelector(".main-sec2");
const subbut22 = document.querySelector(".main-sec3");
const subbut33 = document.querySelector(".main-sec4");
const subbut44 = document.querySelector(".main-sec5");

const littlebut11 = document.querySelector(".header");
const littlebut22 = document.querySelector(".main-sec2");
const littlebut33 = document.querySelector(".main-sec6");



but1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: but11.offsetTop, behavior: "smooth" })
})

but3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: but33.offsetTop, behavior: "smooth" })
})
buttop.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: but11.offsetTop, behavior: "smooth" })
})


subbut1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: subbut11.offsetTop, behavior: "smooth" })
})
subbut2.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: subbut22.offsetTop, behavior: "smooth" })
})
subbut3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: subbut33.offsetTop, behavior: "smooth" })
})
subbut4.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: subbut44.offsetTop-50, behavior: "smooth" })
})


littlebut1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlebut11.offsetTop, behavior: "smooth" })
})
littlebut2.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlebut22.offsetTop, behavior: "smooth" })
})
littlebut3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlebut33.offsetTop, behavior: "smooth" })
})
// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기