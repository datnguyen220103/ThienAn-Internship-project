
function addNav(){
    let Nav = document.querySelector('.nav')
    Nav.innerHTML =(`
        <div class="container">
            <div class="row">
                <div class="nav__content">
                    <div class="nav__bar-mobile">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="nav__logo ">
                        <img src="/img/logo.webp" alt="">
                    </div>
                    <ul class="nav__list">
                        <li><a href="#">Developer</a></li>
                        <li><a href="#">Ecosystem</a></li>
                        <li><a href="#">Institutions</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Explore</a></li>
        
                        <li class="list__mobile">
                            <ul>
                                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-discord"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                            </ul>
                        </li>
                    </ul>
        
                    <div class="nav_btn">
                        <button id="btn__nav" class="btn-hover">Launch App</button>
                    </div>
                </div>
            </div>
        </div>
    `)
    
}

addNav()

var openBarMobile = document.querySelector('.nav__bar-mobile')
var navList = document.querySelector('.nav__list')

// tắt mở Nav List
openBarMobile.addEventListener('click',function(){
    navList.classList.toggle('list-open')
})

// phóng to màn hình tắt Nav List
window.addEventListener('resize',function(){
    if(this.window.innerWidth > 767){
        navList.classList.remove('list-open')
    }
})


// Show btn special Banner
var hoverExtention = document.querySelector('.button-extension button');
var btnExtention = document.querySelector('.button-special');

function showButtonSpecial() {
    btnExtention.classList.add('show-btn');
}

function hideButtonSpecial() {
    btnExtention.classList.remove('show-btn');
}

hoverExtention.addEventListener('mouseover', showButtonSpecial);
hoverExtention.addEventListener('mouseout', function(event) {
    if (!btnExtention.contains(event.relatedTarget)) {
        hideButtonSpecial();
    }
});

btnExtention.addEventListener('mouseover', showButtonSpecial);
btnExtention.addEventListener('mouseout', function(event) {
    if (!hoverExtention.contains(event.relatedTarget)) {
        hideButtonSpecial();
    }
});


// slide
var listSlide = document.querySelectorAll('.company-logo img')
var slideShow = document.querySelectorAll('.slide-inner')
var curentIndex = 0

function showslide(){
    slideShow[curentIndex].classList.toggle('appear')
}

listSlide.forEach((item, index)=>{
    item.addEventListener('mouseover',function(){
        curentIndex = index
        showslide()
    })
})

listSlide.forEach((item, index)=>{
    item.addEventListener('mouseout',function(){
        curentIndex = index
        showslide()
    })
})


// Card item
var listCard = [
    {
        title: "Leading with Speed",
        subheadline:"",
        content:"Achieving 390 ms block finality, Sei is at the pinnacle of high-speed blockchain platforms, ideal for web2 like experiences, high-frequency trading and real-time digital exchanges."
    },
    {
        title: "Revolutionary Architecture",
        subheadline:"Parallelized Runtime",
        content:"Sei V2 introduces a unique architecture designed to enhance scalability and developer flexibility."
    },
    {
        title: "Robust Security",
        subheadline:"Building on the Shoulders of Giants",
        content:"Security is paramount on Sei. Building on and turbocharging proven, battle tested architecture such as tendermint consensus and wasm."
    }
]

var containerCard = document.querySelector('.cards .row')

function printCard(){
    for(let i = 0; i < listCard.length; i++){
        containerCard.innerHTML += `
        <div class="col-lg-4 col-md-12">
                                <div class="card-item">
                                    <img src="/img/header-card.png" alt="">
                                    <div class="card-text">
                                        <h3>${listCard[i].title}</h3>
                                        <span class="card-subheadline">
                                            ${listCard[i].subheadline}
                                        </span>
                                        <p>
                                            ${listCard[i].content}
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    }
}

printCard()