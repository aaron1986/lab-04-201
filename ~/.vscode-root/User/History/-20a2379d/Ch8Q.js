
function cardCode() {
    const numSection = 6;

    const images = [
        "./imgs/1.jpeg",
        "./imgs/2.jpeg",
        "./imgs/3.jpeg",
        "./imgs/4.jpeg",
        "./imgs/5.jpeg",
        "./imgs/6.jpeg"
    ];
    

    for(let i = 0; i < numSection; i++) {
        const htmlSection = `
                <div class="card">
                <img src="${images[i]}" class="card-img-top" alt="">
                <div class="card-body">
                <p class="card-text">
                Budapest Chainbridge.
                </p>
                </div> <!-- end of card div -->
                </div> <!-- end of card body --> 
            `;

            document.write(htmlSection);

    }
} 




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