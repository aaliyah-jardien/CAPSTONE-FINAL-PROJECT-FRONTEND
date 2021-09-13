
function login() {
    let username = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;

    fetch("https://aaliyahs-dentistry.herokuapp.com/dentist-login/", {
      method: "PATCH",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
    }),
  
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
          console.log(json.data);
          if (json.data.length == 0) {
              alert("Incorrect information")
          }
          else{
              localStorage.setItem('user', JSON.stringify(json.data));
              window.location = './home.html'
          }
      });
}