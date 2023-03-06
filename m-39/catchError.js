const value = document.getElementById("simple-search-inp").value;
const btn = document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("out-put").innerText= value;
    console.log(value);
 });
