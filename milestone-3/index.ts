// Select form and resume elements
const form_list = document.getElementById("resume-form") as HTMLFormElement;
const name_list = document.getElementById("name") as HTMLHeadingElement;
const contact = document.getElementById("contact") as HTMLParagraphElement;
const skills = document.getElementById("skills-list") as HTMLUListElement;
const experience = document.getElementById("experience-list") as HTMLUListElement;
const education = document.getElementById("education-list") as HTMLUListElement;
//make  function to get data
function getData(listElement: HTMLUListElement, items: string[]) {
  listElement.innerHTML = items.map((item) => `<li>${item.trim()}</li>`).join("");
}

//add event listener in form list
form_list.addEventListener("click", function (event) {
  event.preventDefault(); // use for pervent the default behaivour
  //make variable to get data
  const getInputValue = (id: string) =>
    (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement).value;

  // Collect input from user
  const inputName = getInputValue("name-input"); // get name
  const inputEmail = getInputValue("email-input"); // get email
  const inputPhone = getInputValue("phone-input"); // get phone number
  const inputEducation = getInputValue("edu-input").split(","); // get education
  const inputSkills = getInputValue("skill-input").split(","); // get skills
  const inputExperience = getInputValue("experience-input").split(","); // get experience

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\s]+$/; // Only alphabets and spaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
  const phoneRegex = /^\d{10,12}$/; // Allow only 10 to 12 digits

  // Validation checks
  if (!nameRegex.test(inputName)) {
    alert("Please enter a valid name (only letters and spaces).");
    return;
  }
  
  if (!emailRegex.test(inputEmail)) {
    alert("Please enter a valid email address.");
    return;
  }
  
  if (!phoneRegex.test(inputPhone)) {
    alert("Please enter a valid phone number (10 to 12 digits).");
    return;
  }
  //textContent pura input text mai show kre ga
  name_list.textContent = inputName;
  //ye bhi text mai show ho ga
  contact.textContent = `${inputEmail} | ${inputPhone}`;
  //jo list element hai us mai function apply kre ho.
  getData(education, inputEducation); // Handles multiple educations
  getData(experience, inputExperience); // Handles multiple experiences
  getData(skills, inputSkills); // Handles multiple skills
});

