function register(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let cellphone = document.getElementById("cellphone").value;
    let password = document.getElementById("password").value;

console.log(name, surname, dob, gender, email, cellphone, password);
fetch("https://aaliyahs-dentistry.herokuapp.com/register-patient/", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    surname: surname,
    password: password,
    dob: dob,
    gender: gender,
    email: email,
    callphone: cellphone,
    password: password
  }),

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  alert('Registered Successfully')
  window.location = './home.html'
}