var content = document.querySelector('.content')
var iconRemove = document.querySelectorAll('li i')
var input = document.querySelector('input')
var  tags = ['acb','dd']
var btnRemoveAll = document.querySelector('.remove-all')

function render(){
    content.innerHTML = ''
    for(let i = 0;i < tags.length; i++){
        const tag = tags[i]
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-xmark" onclick="removeTag()"></i>
                            </li> `
    }
    content.appendChild(input); // Thêm input vào cuối danh sách
    input.focus();
}

render()
input.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value= ''
        render()
    }
})

function removeTag(index){
    tags.splice(index,1)
    render()
}

btnRemoveAll.addEventListener('click', function(){
    tags = []
    render()
})