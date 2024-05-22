var nav = document.querySelector('nav')
nav.innerHTML = `<div class="container">
            <div class="row">
                <div class="nav__header">
                    <div class="nav__logo">
                        <span>Datawise <i class="fa-regular fa-chart-bar"></i></span>                
                    </div>
                    <ul class="nav_list">
                        <li class="nav__item hover-sub-nav">
                            <a href="#">Features <i class="fa-solid fa-angle-down"></i></a>
                            <div class="sub-nav">
                                <ul class="sub-nav__list">
                                    <li class="sub-nav__header"><a href="#">
                                            HOME PAGES
                                        </a></li>
                                    <li class="sub-nav__item">
                                        <a href="#">Real-time Data processing</a>
                                        <p>Stay updated with instant insights and make decisions based on the latest
                                            data.</p>
                                    </li>
                                    <li class="sub-nav__item">
                                        <a href="#">Collaborative Tools</a>
                                        <p>Work together seamlessly, share insights, and drive collective growth with
                                            your team.</p>
                                    </li>
                                    <li class="sub-nav__item">
                                        <a href="#">Security & Compliance</a>
                                        <p>Ensure your data's safety with our top-tier security protocols and compliance
                                            certifications.</p>
                                    </li>
                                </ul>
                                <span></span>
                                <ul class="sub-nav__list">
                                    <li class="sub-nav__header"><a href="#">
                                            MAIN PAGE
                                        </a></li>
                                    <li class="sub-nav__item">
                                        <a href="#">Real-time Data Processing</a>
                                        <p>Stay updated with instant insights and make decisions based on the latest
                                            data.</p>
                                    </li>
                                    <li class="sub-nav__item">
                                        <a href="#">Collaborative Tools</a>
                                        <p>Work together seamlessly, share insights, and drive collective growth with
                                            your team.</p>
                                    </li>
                                    <li class="sub-nav__item">
                                        <a href="#">Security & Compliance</a>
                                        <p>Ensure your data's safety with our top-tier security protocols and compliance
                                            certifications.</p>
                                    </li>
                                </ul>
                                <span></span>
                                <ul class="sub-nav__list">
                                    <li class="sub-nav__header"><a href="#">
                                            CONTENT PAGE
                                        </a></li>
                                    <li class="sub-nav__item">
                                        <a href="#">Real-time Data Processing</a>
                                        <p>Stay updated with instant insights and make decisions based on the latest
                                            data.</p>
                                    </li>
                                    <li class="sub-nav__item">
                                        <a href="#">Collaborative Tools</a>
                                        <p>Work together seamlessly, share insights, and drive collective growth with
                                            your team.</p>
                                    </li>
                                    <li class="sub-nav__item">
                                        <a href="#">Security & Compliance</a>
                                        <p>Ensure your data's safety with our top-tier security protocols and compliance
                                            certifications.</p>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li class="nav__item hover-sub-nav">
                            <a href="#">Case Studies <i class="fa-solid fa-angle-down"></i></a>
                            <div class="sub-nav sub-nav-2">
                                <ul class="sub-nav-list-2">
                                    <li>
                                        <a href="#">AI-Powered Predictive Analytics</a>
                                    </li>
                                    <li>
                                        <a href="#">Seamless Integrations</a>
                                    </li>
                                    <li>
                                        <a href="#">Customizable Dashboards</a>
                                    </li>
                                    <li>
                                        <a href="#">Real-time Data Processing</a>
                                    </li>
                                    <li>
                                        <a href="#">Collaborative Tools</a>
                                    </li>
                                    <li>
                                        <a href="#">Security & Compliance</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav__item"><a href="#">Pricing</a></li>
                        <li class="nav__item"><a href="#">Applications</a></li>
                    </ul>
                    <div class="nav__btn">
                        <button class="btn-white"> Get a demo</button>
                        <button class="btn-green"> Start your free trial</button>
                    </div>
                    <div class="nav__mobile">
                        <i class="fa-solid fa-bars btn-mobile"></i>
                        <div class="nav__mobile__wrapper">
                            <ul class="nav__mobile-list">
                                <li>
                                    <a href="#">Home layout</a>
                                    <i class="fa-solid fa-angle-down"></i>
                                </li>
                                <li class="open-sub-moblie">
                                    <a href="#">Other main pages</a>
                                    <i class="fa-solid fa-angle-down"></i>
                                    <ul class="sub-mobile">
                                        <li><a href="#">Solution / Service / Produce</a></li>
                                        <li><a href="#">Case study</a></li>
                                        <li><a href="#">About us 1</a></li>
                                        <li><a href="#">About us 2</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Other content page</a>
                                    <i class="fa-solid fa-angle-down"></i>
                                </li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a id="btn-toggle" onclick="darkMode()" href="#">Dark mode</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`


var btnShowMobile = document.querySelector('.btn-mobile')
var navMobile = document.querySelector('.nav__mobile__wrapper')
var btnSubMobile = document.querySelector('.open-sub-moblie')
var subMoblie = document.querySelector('.sub-mobile')

console.log(btnShowMobile)
btnShowMobile.addEventListener('click', function(){
    navMobile.classList.toggle('expanded')
    if(navMobile.className !== 'expanded')
        subMoblie.classList.remove('expanded-sub-mobile')
})

btnSubMobile.addEventListener('click', function(){
    subMoblie.classList.toggle('expanded-sub-mobile')
})

// list solutions

var listSolution = [
    {
        img: "advance.svg",
        title: "Advanced Data Analytics",
        content: "Predictive analytics to gain actionable insights and forecast future trends."
    },
    {
        img: "opera.svg",
        title: "Operations with Automation",
        content: "Enhance your operational efficiency with our AI-driven automated workflows."
    },
    {
        img: "unlock.svg",
        title: "Unlock Insights with NLP",
        content: "Language processing to extract meaningful unstructured data."
    },
    {
        img: "custom.svg",
        title: "Custom AI for Your Needs",
        content: "Collaborate with our team of AI experts to build and deploy bespoke models."
    }
]
var solutionCotain = document.querySelector('.solution__list')

function printSolution(){
    for(let i = 0; i< listSolution.length; i++){
        solutionCotain.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="solutions__item">
                                <img src="/Img/${listSolution[i].img}" alt="">
                                <h3>${listSolution[i].title}</h3>
                                <p>${listSolution[i].content}</p>
                            </div>
                        </div>`
    }
}
printSolution()


var listBlog = [
    {
        img: "blog1",
        title: "The Rise of AI in Business Analytics: What You Need to Know",
        category: "Report"
    },
    {
        img: "blog2",
        title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
        category: "News"
    },
    {
        img: "blog3",
        title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
        category: "News"
    },
    {
        img: "blog4",
        title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
        category: "Report"
    }
    
]
var blogcontain = document.querySelector('.blog__list')

function printBlog(){
    for(let i = 0; i < listBlog.length; i++){
        blogcontain.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="blog__item">
                                <div class="blog__img">
                                    <img src="/Img/${listBlog[i].img}.png" alt="">
                                </div>
                                <span>${listBlog[i].category}</span>
                                <h3><a href="#">${listBlog[i].title}</a></h3>
                            </div>
                        </div>`
    }
}
printBlog()

var listQA =[
    {
        question:"Can DataWise's AI solutions be  business systems?",
        answer:"Yes, integration is a key strength of our AI solutions. DataWise's AI platform is designed for flexibility and can be integrated with a wide range of existing business systems."
    },
    {
        question:"What types of AI services does DataWise offer?",
        answer:"Absolutely, our services are scalable and designed to accommodate and process large amounts of data efficiently."
    },
    {
        question:"What customer support do you offer for your AI solutions?",
        answer:"Our services can benefit various industries, including healthcare, finance, retail, entertainment, and many more, wherever AI can be leveraged."
    },
    {
        question:"Can your AI help improve my website's conversion rate?",
        answer:"We pride ourselves on our service's adaptability, user-centric design, and our continual commitment to pushing the boundaries of AI technology."
    },
    {
        question:"Can your AI identify areas for A/B testing and personalization?",
        answer:"We offer a range of support services from online resources, live chat support, to dedicated account representatives for enterprise customers."
    },
    {
        question:"How can your AI help improve my website's SEO ranking?",
        answer:"Yes, our platform allows for custom model training with your proprietary datasets."
    }
]
var qaContain = document.querySelector('.listQA')
function printQA(){
    for(let i = 0; i < listQA.length; i++){
        qaContain.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="faq__box">
                                <div class="question">
                                    <h4>${listQA[i].question}</h4>                           
                                </div>
                                <div class="answer">
                                    <p>${listQA[i].answer}</p>                                   
                                </div>
                            </div>
                        </div>`
    }
}

printQA()


function darkMode() {
    var body = document.querySelector('body')
    var btnToggle = document.querySelector('#btn-toggle')
    body.classList.toggle("dark-mode")
    btnToggle.innerHTML = "Light mode"
    if(body.className == 'dark-mode'){
        btnToggle.innerHTML = 'Light mode'
    }else{
        btnToggle.innerHTML = 'Dark mode'
    }
}
