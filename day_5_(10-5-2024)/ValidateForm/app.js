var userName = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var cofirmPassword = document.querySelector('#cofirm-password')
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
            showError(input,'Không được để trống')
        }else{
            showSuccess(input)
        }
    });
    return isEmptyError
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

function checkMatchPasswordError(passwordInput, cfpasswordInput){
    if(passwordInput.value !== cfpasswordInput.value ){
        showError(cfpasswordInput, "Mật khẩu không trùng khớp" )
        return true
    }
    return false
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([userName, email, password, cofirmPassword])
    let isEmailError = checkEmailError(email)
    let IsUserNameLengthError = CheckLengthError(userName, 8, 20)
    let IsPasswordLengthError = CheckLengthError(password, 8, 20)
    let IsCheckMatchPasswordError = checkMatchPasswordError(password,cofirmPassword)
    
    if(isEmptyError || isEmailError || IsUserNameLengthError || IsPasswordLengthError || IsCheckMatchPasswordError){
        //do nothing 
    }else{
        //...
    }
})