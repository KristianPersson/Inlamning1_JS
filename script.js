/*const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const birthDate = document.getElementById('birthDate')
const adress = document.getElementById('adress')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
let messages = []
if(firstName.value === '' || firstName.value == null) {
    messages.push('Name is required')
}*/


var forms = document.querySelectorAll('.needs-validation')


function validMinValue(value, minValue = 2) {
    if(value.length < minValue)
        return false
        else
        return true
}


//Email validation
function validEmail(value) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regEx.test(value))
        return false
        else
        return true
}

forms.forEach(element => {

    switch(element.type) {
        case "text":
            element.addEventListener("keyup", function(e))
                
                if(!validMinValue(e.target.value))
                    e.target.classList.add("is-invalid");
                else
                    e.target.classList.remove("is-invalid");
            break;
        case "email":
            element.addEventListener("keyup", function(e) {console.log(validEmail(e.target.value))})
            
            break;
        
        
        
        }


}


)