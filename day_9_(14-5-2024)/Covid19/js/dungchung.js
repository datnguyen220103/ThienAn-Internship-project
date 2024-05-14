// add topnav
function addTopNav(){ 
    let addTN = document.querySelector('.top-nav')
    addTN.innerHTML = `
            <div class="nav-link">
            <div class="container">
                <div class="row">
                    <div class="logo">
                        <img src="/img/logo.svg" alt="">
                    </div>
                    <ul class="nav-link__list">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Donate</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `
}
addTopNav()

function announcement(){
    let annout = document.querySelector('.announcement')
    annout.innerHTML = `
        <div class="container">
            <div class="row">
                    <a href="#">
                        Announcement
                    </a>
                    <p>
                        How we're sesponding to COVID-19
                    </p>
            </div>
            <i class="fa-solid fa-xmark" onclick="removeAnnounce()"></i>
        </div>
        `
}
announcement()

function removeAnnounce(){
    let annout = document.querySelector('.announcement')
    annout.classList.remove("announcement");
    annout.innerHTML= ``
}

var listsupport = [
    {
        number: "01",
        title: "SHOP PRODUCTS",
        content: "Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!",
        img: "support1.svg"

    },
    {
        number: "02",
        title: "DONATE",
        content: "Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.",
        img: "support2.svg"

    },
    {
        number: "03",
        title: "BUY GIFT CARDS",
        content: "Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family. ",
        img: "support3.svg"

    }
]
// function addSupport() {
//     let supportItems = document.querySelectorAll('.support .row:last-child');
//     for (let i = 0; i < listsupport.length; i++) {
//         supportItems.innerHTML= `
//             <div class="col-lg-4">
//                     <div class="support__item">
//                         <div class="support__box">
//                             <span></span>
//                             <h3></h3>
//                             <img src="/Covid19/img/tron.svg" alt="">
//                         </div>
//                         <p></p>
//                     </div>
//                 </div>
        
//                         `
//     }
// }
// addSupport();
var supportContainer = document.querySelector('.support__list');

function addSupport() {
    for (let i = 0; i < listsupport.length; i++) {
        supportContainer.innerHTML += `
            <div class="col-lg-4">
                <div class="support__item">
                    <div class="support__box">
                        <span>${listsupport[i].number}</span>
                        <h3>${listsupport[i].title}</h3>
                        <img src="/img/${listsupport[i].img}" alt="">
                    </div>
                    <p>${listsupport[i].content}</p>
                </div>
            </div>`;
    }
}

addSupport();

var listProduct = [
    {
        img: "tent.png",
        name: "White Tent",
        price: "200.00",
        sale: false,
        discount: 0
    },
    {
        img: "coffeeCup.jpg",
        name: "Tin Coffee Design",
        price: "35.00",
        sale: false,
        discount: 0
    },
    {
        img: "bluePack.jpg",
        name: "White Tent",
        price: "200.00",
        sale: true,
        discount: "150.00"
    }
]

var productContainer = document.querySelector('.product__list')

function addProduct(){
    var productHTML = '';
    for (let i = 0; i < listProduct.length; i++){
        productHTML +=`
            <div class="col-lg-4 col-md-12">
                    <div class="product__item ${listProduct[i].sale ? 'sale' : ''}">
                        <div class="product__item__img ">
                            <img src="/img/${listProduct[i].img}" alt="">
                            ${listProduct[i].sale ? '<span>SALE</span>' : ''}
                        </div>
                        <div class="product__item__content">
                            <h3>${listProduct[i].name}</h3>
                            <a href="#"> $
                            ${listProduct[i].price} 
                             ${listProduct[i].sale ? `<p>${listProduct[i].discount}</p>` : ''}
                            </a>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </div>  `
    
    }
    productContainer.innerHTML = productHTML;
}

addProduct()


var btnBackToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll',function(){
     if(window.scrollY > 20){
        btnBackToTop.style.display = "flex"  
    } else {
        btnBackToTop.style.display = "none";
    }
})

btnBackToTop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
function backToTop(){
    
}
