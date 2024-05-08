var input = document.querySelector('input')
var btn = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelectorAll('.todo')

form.addEventListener('submit',function(event){
    event.preventDefault();// Ngăn chặn chuyển hướng trang mặc định
    let val = input.value.trim() //trim()bỏ các ký tự dư thừa từ đầu và cuối của chuỗi.
    if(val){
        addTodoElement({
            text: val,
        })
    }
    input.value = ''
})

function addTodoElement(todo){
    // {
    //     text:
    //     status: completed
    // }
    // <li>
    //         <span> test</span>
    //         <i class="fa-regular fa-trash-can"></i>
    // </li>
    var li = document.createElement('li')
    li.innerHTML = ` 
        <span>${todo.text}</span>
        <i class="fa-regular fa-trash-can"></i>
    `//dùng `` cho chuỗi 
    if(todo.status === 'conpleted'){
        li.setAttribute('class', 'completed')
    }


    li.addEventListener('click',function(){
        this.classList.toggle('completed')
        // toggle
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove()
    })
    todos.forEach(function(todoElement) {
        todoElement.appendChild(li);
    });
    // .appendChild()  thêm vào cuối
}


import Listtodo from './todolistApi.js'
const main = async() => {
    try{
        const response = await Listtodo.getAll()
        console.log(response)
    }catch(error){
        console.log("fail")
    }
}