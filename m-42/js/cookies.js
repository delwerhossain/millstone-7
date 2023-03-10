document.getElementById("set-cookies").addEventListener("click", () => {
  const set = localStorage.setItem("user", "delwer hossain");
  const get = localStorage.getItem("user");
  console.log(get);
  // console.log(set);
});

document.getElementById("input-cookies-btn").addEventListener("click", () => {
  const name = document.getElementById("input-name").value;
  const value = document.getElementById("input-value").value;
  document.getElementById("input-name").value = "";
  document.getElementById("input-value").value = ""; 
  localStorage.setItem(name, value);
    const get = localStorage.getItem(name);
    getList(name , value);
//   console.log(get);
});

function getList(name, value) {
    const parent = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = `${name} : ${value}`;
    parent.appendChild(li);
 }