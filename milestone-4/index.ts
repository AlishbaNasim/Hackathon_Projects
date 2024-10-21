// Get elements from the DOM
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const editButton = document.getElementById('idButton') as HTMLButtonElement; 
const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Function to toggle the edit mode of the form
function toggleEditMode(): void {
  //access all quey selector
  const inputs = resumeForm.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
// make logic on edit btn
  if (editButton.textContent === 'Edit') {
    //
    inputs.forEach((input) => {
       // Remove the 'readonly' attribute from the input
      input.removeAttribute('readonly');
      //apply css on input
      input.style.backgroundColor = '#fff';
    });
    //save the edit 
    editButton.textContent = 'Save';
  } else {
    inputs.forEach(input => {
      // Enable the 'readonly' attribute from the input
      input.setAttribute('readonly', 'true');
      //apply css on input data
      input.style.backgroundColor = '#f0f0f0';
    });
    //save edit data
    editButton.textContent = 'Edit';
  }
}

// Function to generate the resume
function generateResume(event: Event): void {
  event.preventDefault();//write preventdefault  function to make page refresh

  // Retrieve data from form fields
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

  // Generate the resume preview content
  resumeOutput.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education.replace(/\n/g, '<br>')}</p>
    <h3>Skills</h3>
    <p>${skills.replace(/\n/g, '<br>')}</p>
    <h3>Experience</h3>
    <p>${experience.replace(/\n/g, '<br>')}</p>
  `;
}

// Event listeners for buttons
editButton.addEventListener('click', function(event){  
  event.preventDefault();
  toggleEditMode();
});

generateButton.addEventListener('click', generateResume);  
