var searchBoxBtn = document.querySelector('.search-box__btn')

searchBoxBtn.addEventListener('click',function(){
    this.parentElement.classList.toggle('open') //parentElement trỏ đến cha của this
})