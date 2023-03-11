document.getElementById("set-cookies").addEventListener("click", () => {
  const set = localStorage.setItem("user", "delwer hossain");
  const get = localStorage.getItem("user");
  console.log(get);
  // console.log(set);
});

document.getElementById("input-cookies-btn").addEventListener("click", () => {
  const name = document.getElementById("input-name").value;
  const value = document.getElementById("input-value").value;
  if (name && value) {
    document.getElementById("input-name").value = "";
    document.getElementById("input-value").value = "";
    setStorage(name, value);
  } else {
    alert("Please enter name and value");
  }
  displayProductsFromLocal();
});

// create obj
const getStorageShopping = () => {
  let cart = {};
  let check = localStorage.getItem("cart");
  if (check) {
    cart = JSON.parse(check);
  }
  return cart;
};

// add to cart set in local storage
const setStorage = (name, value) => {
  let cart = getStorageShopping();
  cart[name] = value;
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
};

// set list of attributes
const getList = (name, value) => {
  const parent = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = `${name} : ${value}`;
  parent.appendChild(li);
};

// DISPLA
const displayProductsFromLocal = () => {
  let cart = getStorageShopping();
  document.getElementById("list").innerHTML = "";
  for (const value in cart) {
    console.log(value, cart[value]);
    getList(value, cart[value]);
  }
};

displayProductsFromLocal();
