//user login function
function login() {
  let user = {
    dentist_email: document.querySelector("#email").value,
    dentist_password: document.querySelector("#password").value,
    dentist_username: document.querySelector("#username").value
  }
  console.log(user)
  fetch('https://aaliyahs-dentistry.herokuapp.com/dentist-login/', {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((response) => response.json())
  .then((response) => {
      console.log(response);
      let user = response['user']
      if(user){
        alert("Successfully Logged In")
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "./home.html";
      } else {
        alert("No user found")
      }
      // if (json.data == null) {
      //   alert("wrong");
      // } else {
      //   user = json.data;
      //   console.log(user.user_id);
      //   userid = user.user_id;
      //   storage.setItem("users", userid);
      //   console.log(`user id: ${userid}`);
      //   window.location.href = "products.html";
      // }
    });
}

// this is the logout function, it can clear items and other things from the local storage
//  does not remove things completely, it's still in my database
function logout(){
localStorage.clear()
}
