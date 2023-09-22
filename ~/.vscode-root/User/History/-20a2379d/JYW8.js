/* function cardCode() {
  const numSection = 10;

  const images = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img7.jpg",
    "./img/img8.jpg",
    "./img/img9.jpg",
    "./img/img10.jpg",
  ];

  for (let i = 0; i < numSection; i++) {
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
} */


// New function 
function cardCode() {
  const numSection = 10;

  const images = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img7.jpg",
    "./img/img8.jpg",
    "./img/img9.jpg",
    "./img/img10.jpg",
  ];

  // Fetch the CSV file containing details
  fetch('./csv_files/Image_Links.csv')
    .then(response => response.text())
    .then(data => {
      // Split the CSV data into rows
      const rows = data.split('\n');
      
      // Process each row (skip the header row if it exists)
      for (let i = 1; i <= numSection; i++) {
        const columns = rows[i].split(',');
        const title = columns[1]; // Assuming the title is in the first column
        const webLink = columns[4]; // Assuming the web link is in the second column
        
        const htmlSection = `
          <div class="card">
            <img src="${images[i - 1]}" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text">
                ${title}
              </p>
              <a href="${webLink}" target="_blank">Visit Website</a>
            </div> <!-- end of card div -->
          </div> <!-- end of card body -->
        `;
        
        document.write(htmlSection);
      }
    })
    .catch(error => console.error('Error fetching CSV file:', error));
}



//Write function for movie quiz!

//Contact
function validateName() {
  const name = document.getElementById("fullName").value;

  if (name.length <= 1 || name.length >= 30) {
    console.log("Name is Required!");
    return false;
  }

  console.log("The name validation works!");
  return true;
} //End of validateName function

function validateEmail() {
  const email = document.getElementById("email").value;

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    console.log("email is invalid!");
    return false;
  }

  console.log("The email validation works!");
  return true;
} //End of validateEmail function

function subjectMessage() {
  const subject = document.getElementById("subject").value;

  if (subject.length < 10 || subject.length > 50) {
    console.log("Subject must contain between 10 and 50 letters");
    return false;
  }

  console.log("The subject validation works!");
  return true;
} // End of subjectMessage function
