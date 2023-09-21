//Write function for movie quiz!





















//Contact
function validateName() {

    const name = document.getElementById("fullName").value;
    
    if(name.length <= 1 || name.length >= 30) {
        console.log("Name is Required!");
        return false;
    }
    
    console.log("The name validation works!");
    return true;
    
    } //End of validateName function
    
    
    function validateEmail() {
    
        const email = document.getElementById("email").value;
    
        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            console.log("email is invalid!");
            return false;
        }
    
        console.log("The email validation works!");
        return true;
    
    
    } //End of validateEmail function
    
    
    function subjectMessage() {
        const subject = document.getElementById("subject").value;
    
        if(subject.length < 10 || subject.length > 50) {
            console.log("Subject must contain between 10 and 50 letters");
            return false;
        }
    
        console.log("The subject validation works!");
        return true;
    
    } // End of subjectMessage function