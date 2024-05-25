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

var listProject = [
    {
        img: "slide-1",
        title: "Wildstone Infra Hotel",
        location: "2715 Ash Dr. San Jose, South Dakota"
    },
    {
        img: "slide-2",
        title: "Wish Stone Building",
        location: "2972 Westheimer Rd. Santa Ana, Illinois"
    },
    {
        img: "slide-3",
        title: "Mr. Parkinston’s House",
        location: "3517 W. Gray St. Utica, Pennsylvania"
    },
    {
        img: "slide-4",
        title: "Oregano Height",
        location: "2464 Royal Ln. Mesa, New Jersey "
    },
    {
        img: "slide-5",
        title: "Wildstone Infra Hotel",
        location: "2715 Ash Dr. San Jose, South Dakota"
    },
    {
        img: "slide-6",
        title: "Wish Stone Building",
        location: "2972 Westheimer Rd. Santa Ana, Illinois"
    },
    {
        img: "slide-7",
        title: "Mr. Parkinston’s House",
        location: "3517 W. Gray St. Utica, Pennsylvania"
    },
    {
        img: "slide-8",
        title: "Oregano Height",
        location: "2464 Royal Ln. Mesa, New Jersey "
    },
    {
        img: "slide-9",
        title: "Wildstone Infra Hotel",
        location: "2715 Ash Dr. San Jose, South Dakota"
    },
    {
        img: "slide-10",
        title: "Wish Stone Building",
        location: "2972 Westheimer Rd. Santa Ana, Illinois"
    },
    {
        img: "slide-11",
        title: "Mr. Parkinston’s House",
        location: "3517 W. Gray St. Utica, Pennsylvania"
    },
    {
        img: "slide-12",
        title: "Oregano Height",
        location: "2464 Royal Ln. Mesa, New Jersey "
    },
    {
        img: "slide-13",
        title: "Wildstone Infra Hotel",
        location: "2715 Ash Dr. San Jose, South Dakota"
    },
    {
        img: "slide-14",
        title: "Wish Stone Building",
        location: "2972 Westheimer Rd. Santa Ana, Illinois"
    },
    {
        img: "slide-15",
        title: "Mr. Parkinston’s House",
        location: "3517 W. Gray St. Utica, Pennsylvania"
    },
    {
        img: "slide-16",
        title: "Oregano Height",
        location: "2464 Royal Ln. Mesa, New Jersey "
    }
]

var btnPrevProject = document.querySelector('#btn-prev-slide')
var btnNextProject = document.querySelector('#btn-next-slide')
var track = document.querySelector('.track')
var projectContain = document.querySelector('.list-slide-show')
var currentIndexPJ = 0

function showProject(){
    projectContain.innerHTML =""
    for(let i= 0; i<4; i++){
        projectContain.innerHTML+=`
        <div class="slide-item">
         <img src="/img/${listProject[currentIndexPJ+i].img}.png" alt="">
                                    <div class="slide__text">
                                        <h3>${listProject[currentIndexPJ+i].title}</h3>
                                        <p>${listProject[currentIndexPJ+i].location}</p>
                                    </div>
                                </div>                           
        `
    }
    trackSelected()
}

showProject()
console.log(currentIndexPJ)

btnPrevProject.addEventListener('click', function(){
    if (currentIndexPJ === 0) {
        currentIndexPJ = Math.floor((listProject.length - 1) / 4) * 4; 
    } else {
        currentIndexPJ -= 4;
    }
    showProject();
})

btnNextProject.addEventListener('click', function(){
   if (currentIndexPJ >= Math.floor((listProject.length - 1) / 4) * 4) {
        currentIndexPJ = 0
    } else {
        currentIndexPJ += 4
    }
    showProject()
})

function printTrack(){
    let index = Math.floor(listProject.length / 4);
    for(let i = 0; i < index;i++){
        track.innerHTML += `<div class="page"></div>`

    }
}
printTrack()

function trackSelected(){
    let pageSelected = document.querySelectorAll('.page');
            let currentPage = Math.floor(currentIndexPJ / 4);
            pageSelected.forEach((page, index) => {
                if (index === currentPage) {
                    page.classList.add('page-selected');
                } else {
                    page.classList.remove('page-selected');
                }
            });
}

trackSelected()


var nameInput = document.querySelector('#name')
var email = document.querySelector('#email')
var reasons = document.querySelector('#reasons')
var phone = document.querySelector('#phonenumber')
var messageInput = document.querySelector('#message')
var form = document.querySelector('form')

function showError(input, message){
    let parent = input.parentElement
    let small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ""
}

function checkEmptyError(listInput){
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError = true
            showError(input, 'không được để trống')
        }else{
            showSuccess(input)
        }
    });
}

function checkEmailError(input){
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()
    regexEmail.test(input)

    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,'Email không hợp lệ')
    }

    return isEmailError
}

function CheckLengthError(input, min, max){
    input.value = input.value.trim()

    if(input.value.length < min){
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return true
    }

    if(input.value.length > max){
        showError(input, `Chỉ được tối đa ${max} ký tự`)
        return true
    }

    showSuccess(input)
    return false
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let isEmptyError = checkEmptyError([nameInput, email, reasons, phone, messageInput]);
    let isEmailError = checkEmailError(email);
     let IsUserNameLengthError = CheckLengthError(phone, 8, 11)
});