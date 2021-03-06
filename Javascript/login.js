function login() {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;

    fetch("https://aaliyahs-dentistry.herokuapp.com/dentist-login/", {
      method: "PATCH",
      body: JSON.stringify({
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
          if (data['status_code'] == 401) { 
              alert("Incorrect information")
          }
          else{
              localStorage.setItem('user', JSON.stringify(json.data));
              window.location = './home.html'
          }
      });
}