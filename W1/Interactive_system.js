//Javascript Commments
//Firts we need to start declaring the variables.

//Set Variables.

    function ageValidator(){
        const name = document.getElementById("name").value;
        const age = parseInt(document.getElementById("age").value);
        const message = document.getElementById("msg");
        
// Validations of ages
        if (isNaN(age) || age<= 0){
            message.textContent = ("Invalid number or not filled, Please try again.");
        }
        else if (age < 18){
            message.textContent = (`Hi ${name}, you're underage. Keep learning and enjoying coding!`);
        }
        else if (age >= 18 && age < 80){
            message.textContent = (`Hi ${name}, you're of legal age. Get ready for great opportunities in the world of programming!`);
        }
        else if(age > 80){
            message.textContent = ("Hey! are you a time traveler? Please enter your age correctly.");
        }
    }
        

        