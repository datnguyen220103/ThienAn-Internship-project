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

