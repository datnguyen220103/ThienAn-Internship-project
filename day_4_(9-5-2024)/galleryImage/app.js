var imgs = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery img')
var gallery = document.querySelector('.gallery')
var curentIndex = 0;

function showGallery(){
    if(curentIndex==0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    if(curentIndex== imgs.length -1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    galleryImg.src = imgs[curentIndex].src
        gallery.classList.add('show')
}
imgs.forEach((item, index)=>{
    item.addEventListener('click', function(){
        curentIndex = index
        showGallery()
    })
})
close.addEventListener('click', function(){
    gallery.classList.remove('show')
    
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){//keycode = 27 là của nút ESC
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click',function(){
    if(curentIndex>0){
        curentIndex--
        showGallery()
    }  
})

next.addEventListener('click',function(){
    if(curentIndex< imgs.length - 1){
        curentIndex++
        showGallery()
    }
})