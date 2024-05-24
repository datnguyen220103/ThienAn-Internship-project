var nav = document.querySelector('nav')
nav.innerHTML += `<div class="container">
            <div class="row">
                <div class="nav-bar">
                    <div class="nav__logo">
                        <div class="logo__page">
                            <img src="/img/logo.svg" alt="">
                            <span>TheBox</span>
                        </div>
                    </div>
                    <ul class="nav__link">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a class="nav-special" href="#">Contact Us</a></li>
                    </ul>
                    <i id="btn-mobile" class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>`

var btnMobile = document.querySelector('#btn-mobile')
var navLink = document.querySelector('.nav__link')

btnMobile.addEventListener('click', function(){
    navLink.classList.toggle('nav-mobile__open')
})

window.addEventListener('resize', function(){
    if(this.window.innerWidth > 1199){
        navLink.classList.remove('nav-mobile__open')
    }
})

// BANNER
var bannerWrapper = document.querySelector('.banner__img')
var btnPrev = document.querySelector('#btn-prev')
var btnNext = document.querySelector('#btn-next')
var currentIndex = 0
var titleBanner = [
    {
        title: "Building things <br> is our mission 1."
    },
    {
        title: "Building things <br> is our mission 2."
    },
    {
        title: "Building things <br> is our mission 3."
    },
    {
        title: "Building things <br> is our mission 4."
    },
    {
        title: "Building things <br> is our mission 5."
    },
    {
        title: "Building things <br> is our mission 6."
    }
]

function showBanner(){
    bannerWrapper.style.backgroundImage =  `url(/img/banner${currentIndex+1}.jpg)`;
    var headerBanner = document.querySelector('.banner__img h1')
    headerBanner.innerHTML = titleBanner[currentIndex].title
}

btnPrev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showBanner()
    }
})

btnNext.addEventListener('click', function(){
    if(currentIndex < titleBanner.length -1 ){
        currentIndex++
        showBanner()
    }
})


var servicesList = [
    {
        img: "construction",
        title: "Construction",
        color: "white"
    },
    {
        img: "renovation",
        title: "Renovation",
        color: "var(--blue)"
    },
    {
        img: "consultation",
        title: "Consultation",
        color: "white"
    },
    {
        img: "repair",
        title: "Repair Services",
        color: "var(--blue)"
    },
    {
        img: "architecture",
        title: "Architecture",
        color: "white"
    },
    {
        img: "electric",
        title: "Electric",
        color: "var(--blue)"
    }
]

var servicesWrapper = document.querySelector('.service-wrapper')

function pritntService(){
    for(let i = 0; i < servicesList.length; i++){
        servicesWrapper.innerHTML+= `
        <div class="col-lg-4 col-md-6">
                            <div class="serveice__item" style="background:${servicesList[i].color}";>
                                <img src="/img/${servicesList[i].img}-icon.png" alt="">
                                <h3>${servicesList[i].title}</h3>
                            </div>
                        </div>`
    }
}

pritntService()