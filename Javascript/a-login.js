//user login function
function login() {
  let user = {
    patient_email: document.querySelector("#email").value,
    patient_password: document.querySelector("#password").value
  }
  console.log(user)
  fetch('https://aaliyahs-dentistry.herokuapp.com/login-patient/', {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((res) => res.json())
  .then((response) => {
      console.log(response);
      let user = response['user']
      if(user){
        alert("Successfully Logged In")
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "index.html";
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


// // admin url
// let basURL = "https://aaliyahs-dentistry.herokuapp.com/admin/";
              
// //admin login function
// function adminLogin() {
//     // get data from form
//     const username = document.querySelector("#username").value;
//     const password = document.querySelector("#password").value;
//     console.log(username, password);
//     fetch(basURL, {
//       method: "PATCH",
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json.data);
//         if (json.data == null) {
//           alert("wrong");
//         } else {
//           storage.setItem("admin", JSON.stringify(json.data));
//           // window.location = "./products-admin.html";
//         }
//       });
//   }