
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
                        <img src="./img/logo.webp" alt="">
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
                        <button id="btn__nav">Launch App</button>
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
