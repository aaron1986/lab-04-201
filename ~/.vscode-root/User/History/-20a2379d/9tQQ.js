//Write function for movie quiz!

/*(1) 
    write three variables, 
    one for answer. 
    one for prompt.
    one for attempts.
*/

/*(2)
    write while loop which makes attempts greater then one.
    write attempts to decrement.
*/

/*(3)
    write the if statement to check if number is greater than answer.
    write alert
    write prompt to guess again, but also add the number of attempts.

*/

/*(4)
    write else if statment to check if number is less than answer
    write alert
    write prompt to guess again, but also add the number of attempts.
*/

/*(5)
    write else if statment to check parseInt number variable is equal to answer.
    write alert.
    break.
*/



















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