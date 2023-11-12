// 명함 클릭시 명함 나오게 하는 js
const onoffbut = document.querySelector(".onoffbut");
const business1 = document.querySelector(".business");

onoffbut.addEventListener("click", function(){
    onoffbut.classList.toggle("active1"),
    business1.classList.toggle("active2")
})
// 명함 클릭시 명함 나오게 하는 js


// 리틀박스 클릭시 하위메뉴박스 토글로 나오게 하는 js
const boxbut = document.querySelector(".littleBox > div");
const boxlist = document.querySelector(".boxlist");

boxbut.addEventListener("click", function(){
    boxbut.classList.toggle("active11"),
    boxlist.classList.toggle("active4")
})
// 리틀박스 클릭시 하위메뉴박스 토글로 나오게 하는 js


// 리틀박스 메뉴 클릭시 리틀박스 사라지게 하는 js
const boxbut11 = document.querySelector(".boxlist-1");
const boxbut22 = document.querySelector(".boxlist-2");
const boxbut33 = document.querySelector(".boxlist-3");
const boxlist00 = document.querySelector(".boxlist");

boxbut11.addEventListener("click", function(){
    boxlist00.classList.remove("active4"),
    boxbut.classList.toggle("active11")
})
boxbut22.addEventListener("click", function(){
    boxlist00.classList.remove("active4"),
    boxbut.classList.toggle("active11")
})
boxbut33.addEventListener("click", function(){
    boxlist00.classList.remove("active4"),
    boxbut.classList.toggle("active11")
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
const changeA = document.querySelector(".business>a>h6>span");
const changeB = document.querySelector(".main-sec1>h2:last-of-type");
const changeC = document.querySelector(".main-sec1>h2:last-of-type>a");
const changeE = document.querySelector(".footer>div:last-of-type>a:last-of-type");

changeA.classList.toggle("active3");
changeB.classList.toggle("active3");
changeC.classList.toggle("active3");
changeE.classList.toggle("active3");

setInterval(()=>{
    changeA.classList.toggle("active3"),
    changeB.classList.toggle("active3"),
    changeC.classList.toggle("active3"),
    changeE.classList.toggle("active3")
}, 1000)
// 글자들의 자동 색 변경


// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기
const but1 = document.querySelector(".button1");

const but3 = document.querySelector(".button3");
const buttop = document.querySelector(".gotop");

const littlebut1 = document.querySelector(".boxlist-1");
const littlebut2 = document.querySelector(".boxlist-2");
const littlebut3 = document.querySelector(".boxlist-3");

const subbut1 = document.querySelector(".submenu1");
const subbut2 = document.querySelector(".submenu2");
const subbut3 = document.querySelector(".submenu3");
const subbut4 = document.querySelector(".submenu4");



const but11 = document.querySelector(".fixed");

const but33 = document.querySelector(".main-sec6");
const topp = document.querySelector(".header");

const littlebut11 = document.querySelector(".onoffbut");
const littlebut22 = document.querySelector(".main-sec2 > h1");
const littlebut33 = document.querySelector(".main-sec6 >h3");

const subbut11 = document.querySelector(".main-sec2");
const subbut22 = document.querySelector(".main-sec3");
const subbut33 = document.querySelector(".main-sec4");
const subbut44 = document.querySelector(".main-sec5");

but1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: but11.offsetTop, behavior: "smooth" })
})

but3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: but33.offsetTop-50, behavior: "smooth" })
})
buttop.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: topp.offsetTop, behavior: "smooth" })
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
    window.scrollTo({ top: littlebut33.offsetTop-50, behavior: "smooth" })
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
    window.scrollTo({ top: subbut44.offsetTop, behavior: "smooth" })
})
// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기





