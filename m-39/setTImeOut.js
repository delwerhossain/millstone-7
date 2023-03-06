const  fet = async () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data , "this - 1"));
};

async function handleFetchAwait() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    let data = await response.json()
    console.log(data ,'this - 2');
}
fet();
handleFetchAwait();
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
