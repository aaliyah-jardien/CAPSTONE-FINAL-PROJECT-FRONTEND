
// patients url
let baseURL = "https://cryptic-escarpment-42625.herokuapp.com/users/";
// admin url
let basURL = "https://cryptic-escarpment-42625.herokuapp.com/admin/";

//user register function
function register() {
  // get data from form
  let username = document.querySelector("#username").value;
  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let cell = document.querySelector("#cell").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let address = document.querySelector("#address").value;
  console.log(username, password);

  // send data to api
  fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({
      username,
      first_name,
      last_name,
      cell,
      email,
      password,
      address,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.href = "index.html";
    });
}

//user login function
function login() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  console.log(username, password);
  fetch(baseURL, {
    method: "PATCH",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data);
      if (json.data == null) {
        alert("wrong");
      } else {
        user = json.data;
        console.log(user.user_id);
        userid = user.user_id;
        storage.setItem("users", userid);
        console.log(`user id: ${userid}`);
        window.location.href = "products.html";
      }
    });
}

//admin login function
function adminLogin() {
  // get data from form
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  console.log(username, password);
  fetch(basURL, {
    method: "PATCH",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data);
      if (json.data == null) {
        alert("wrong");
      } else {
        storage.setItem("admin", JSON.stringify(json.data));
        window.location = "./products-admin.html";
      }
    });
}

//admin register function
function adminReg() {
  // get data from form
  let username = document.querySelector("#username").value;
  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let cell = document.querySelector("#cell").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  console.log(username, password);

  // send data to api
  fetch(basURL, {
    method: "POST",
    body: JSON.stringify({
      username,
      first_name,
      last_name,
      cell,
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// display products
let products = [];
let cart = [];

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      products = json.data;
      renderproducts(json.data);
    });
}

getData(base_URL);

if (storage["cart"]) {
  cart = JSON.parse(storage.getItem("cart"));
}

function renderproducts(products) {
  let productContainer = document.querySelector("#products-container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    productContainer.innerHTML += `
	  <div class="products">
    <img class="image image-prod" src=${product.image} alt="pic">
		<h3>${product.name}</h3>
		<h3 class="product-type">${product.prod_type}</h3>
		<h3 class="product-discription">${product.description}</h3>
		<h3 class="product-price">${product.price}</h3>
		<button onclick="addToCart()">Cart</button>
	  </div>
	`;
  });
}

// add to cart
function addToCart() {
  alert("you need to log in");
}

// search bar
function searchProd() {
  let searchTerm = document.querySelector("#searchTerm").value;
  console.log(searchTerm);

  let searchProd = products.filter((products) =>
    products.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(searchProd);

  if (searchProd.length == 0) {
    document.querySelector("#products-container").innerHTML =
      "<h2>Product not found.</h2>";
  } else {
    renderproducts(searchProd);
  }
}

// filter through products using buttons
function productFilter(category) {
  if (category !== "All") {
    let searchPhones = products.filter((products) =>
      products.prod_type.toLowerCase().includes(category.toLowerCase())
    );
    console.log(searchPhones);
    renderproducts(searchPhones);
  } else {
    renderproducts(products);
  }
}