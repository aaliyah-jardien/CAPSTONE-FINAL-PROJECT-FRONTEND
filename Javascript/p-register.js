// FUNCTION TO REGISTER PATIENTS
function register(){
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let cellphone = document.getElementById("cellphone").value;
  let password = document.getElementById("password").value;

  let new_patient = {
    patient_name: document.getElementById("name").value,
    patient_surname: document.getElementById("surname").value,
    patient_dob: dob,
    patient_gender: gender,
    patient_email: email,
    patient_cellphone: cellphone,
    patient_password: password
  }

// FETCHING FROM API
fetch("https://aaliyahs-dentistry.herokuapp.com/register-patient/", {
  method: "POST",
  body: JSON.stringify(new_patient),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  alert('Registered Patient Successfully')
  window.location = './login.html'
}