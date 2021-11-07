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


//Email validation
function validEmail(value) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regEx.test(value))
        return false
        else
        return true
    }

    function validText(value, minValue = 2) {
        if(value.length < minValue)
            return false
            else
            return true
    }

    function validPassword(value, minValue = 8) {
        if(value.length < minValue)
            return false
            else
            return true
    }
     
    function validConfirmPassword(value, minValue = 8) {
        if(value.length < minValue)
            return false
            else
            return true
    }

    function validYear(value, minValue = 2003){
        if(value > minValue)
        return false
        else
        return true
    }
    
    function validZip(value, minValue = 5) {
        if(value.length !== minValue )
            return false
            else
            return true
    }
    function Validate() {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }

   
forms.forEach(element => {

    switch(element.type) {
        case "text":
            element.addEventListener("keyup", function(e) {
                
                if(!validText(e.target.value))
                    e.target.classList.add("is-invalid");
                else
                    e.target.classList.remove("is-invalid");
                })
            break;
        case "email":
            element.addEventListener("keyup", function(e){
                if(!validEmail(e.target.value))
                    e.target.classList.add("is-invalid");
                else
                    e.target.classList.remove("is-invalid");
            })
            
            break;
            case "password":
                element.addEventListener("keyup", function(e) {
                    
                    if(!validPassword(e.target.value))
                        e.target.classList.add("is-invalid");
                    else
                        e.target.classList.remove("is-invalid");
                    })
                break;
        
              
                
            

        }

        switch (element.id){
            
            case "zip":
                element.addEventListener("keyup", function(e) {
                    
                    if(!validZip(e.target.value))
                        e.target.classList.add("is-invalid");
                    else
                        e.target.classList.remove("is-invalid");
                    })
                break;
        
                case "year":
                    element.addEventListener("keyup", function(e) {
                        
                        if(!validYear(e.target.value))
                            e.target.classList.add("is-invalid");
                        else
                            e.target.classList.remove("is-invalid");
                        })
                    break;
                    
                    case "confirmPassword":
                        element.addEventListener("keyup", function(e) {
                            if(Validate !== true)
                            e.target.classList.add("is-invalid");
                            else
                            e.target.classList.remove("is-invalid");

                            })
                        break;

            }
    
        
      
}


)
