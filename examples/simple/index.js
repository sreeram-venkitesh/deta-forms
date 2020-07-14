const name = document.getElementById('name')
const email = document.getElementById('email')
const answer = document.getElementById('answer')
const optionSelected = document.getElementById('optionSelected')

const submitButton = document.getElementById('submitButton')

function checkForm(){
    if(name.value == '' || email.value=='' || answer.value=='' ){
        alert('Please fill the details properly!')
        return false
    }else{
        return true
    }
}

