const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const messageError = document.getElementById("message-error");
const contactForm = document.getElementById("contact-form");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const queryTypeError = document.getElementById("query-type-error");
const chebox = document.getElementById("checkbox");
const cheboxError = document.getElementById("checkbox-error");
const emailError = document.getElementById("email-error");
const inputField = document.getElementsByTagName("input");
const red = "hsl(0, 66%, 54%)";
const confirmationMessage = document.getElementById("confirmation-message");
const contactFormSection = document.getElementById("contact-form-section");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const firstNameInput = document.getElementById("first-name-input");
  const lastNameInput = document.getElementById("last-name-input");
  const messageInput = document.getElementById("message-input");
  const emailInput = document.getElementById("email-input");

  const emailValue = emailInput.value.trim(); // Trim whitespace from the input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Email regex

  let isValid = true;

  if (emailValue == "") {
    console.log("Invalid email");
    emailError.textContent = "Email can not be empty";
    emailError.style.visibility = "visible";
    emailInput.style.borderColor = red;
    isValid = false;
  } else if (!emailValue || !emailRegex.test(emailValue)) {
    console.log("Invalid email");
    emailError.textContent = "Valid email required";
    emailError.style.visibility = "visible";
    emailInput.style.borderColor = red;
    isValid = false;
  } else {
    console.log("Valid email");
    emailError.style.visibility = "hidden";
    emailInput.style.removeProperty("border-color");
  }

  if (chebox.checked) {
    console.log("the consent checkbox is checked");
    cheboxError.style.visibility = "hidden";
  } else {
    console.log("the consent checkbox isn't checked");
    cheboxError.style.visibility = "visible";
    isValid = false;
  }

  if (generalEnquiry.checked) {
    console.log("the general enquiry is checked");
    queryTypeError.style.visibility = "hidden";
  } else if (supportRequest.checked) {
    console.log("the support request is checked");
    queryTypeError.style.visibility = "hidden";
  } else {
    console.log("no radio button is checked");
    queryTypeError.style.visibility = "visible";
    isValid = false;
  }

  if (firstNameInput.value == "") {
    console.log("First Name field is empty");
    firstNameError.style.visibility = "visible";
    firstNameInput.style.borderColor = red;
    isValid = false;
  } else {
    console.log(firstNameInput.value);
    firstNameError.style.visibility = "hidden";
    firstNameInput.style.removeProperty("border-color");
  }

  if (lastNameInput.value == "") {
    console.log("Last Name field is empty");
    lastNameError.style.visibility = "visible";
    lastNameInput.style.borderColor = red;
    isValid = false;
  } else {
    console.log(lastNameInput.value);
    lastNameError.style.visibility = "hidden";
    lastNameInput.style.removeProperty("border-color");
  }

  if (messageInput.value == "") {
    console.log("Message field is empty");
    messageError.style.visibility = "visible";
    messageInput.style.borderColor = red;
    isValid = false;
  } else {
    console.log(messageInput.value);
    messageError.style.visibility = "hidden";
    messageInput.style.removeProperty("border-color");
  }

  if (isValid) {
    confirmationMessage.style.display = "block";
    contactFormSection.style.marginTop = 0;
    contactForm.reset(); // Clears all fields
  } else {
    confirmationMessage.style.removeProperty("display");
    contactFormSection.style.marginTop = "50px";
  }
});
