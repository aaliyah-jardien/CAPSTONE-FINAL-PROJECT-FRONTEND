// FUNCTION TO REGISTER DENTIST
function register(){
  let new_dentist = {
    dentist_name: document.getElementById("name").value,
    dentist_surname: document.getElementById("surname").value,
    dentist_email: document.getElementById("email").value,
    dentist_cellphone: document.getElementById("cellphone").value,
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
  .then((json) => console.log(json));
  alert('Registered Dentist Successfully')
  window.location = './login.html'
}

// // admin url
// let basURL = "https://aaliyahs-dentistry.herokuapp.com/dentist-register/";

// //admin register function
// function adminReg() {
//     // get data from form
//     let username = document.querySelector("#username").value;
//     let first_name = document.querySelector("#first_name").value;
//     let last_name = document.querySelector("#last_name").value;
//     let cell = document.querySelector("#cell").value;
//     let email = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;
//     console.log(username, password);
  
//     // send data to api
//     fetch(basURL, {
//       method: "POST",
//       body: JSON.stringify({
//         username,
//         first_name,
//         last_name,
//         cell,
//         email,
//         password,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }
