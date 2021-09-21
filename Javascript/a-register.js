// FUNCTION TO REGISTER DENTIST
function register(){
  let new_dentist = {
    dentist_name: document.getElementById("name").value,
    dentist_surname: document.getElementById("surname").value,
    dentist_email: document.getElementById("email").value,
    dentist_username: document.getElementById("username").value,
    dentist_password: document.getElementById("password").value
  }

// FETCHING FROM MY API
fetch("https://aaliyahs-dentistry.herokuapp.com/dentist-register/", {
  method: "POST",
  body: JSON.stringify(new_dentist),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    alert('Registered Dentist Successfully')
    window.location = './admin-login.html'
  });
}