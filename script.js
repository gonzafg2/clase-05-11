// JSON => JavaScript Object Notation

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

const obj_json = {
  'name': "John",
  'age': 30,
  'city': "New York",
}

// Petición a un servidor (local o remoto)

const request = fetch("https://jsonplaceholder.typicode.com/users");

console.log("1. request: ", request);

request.then(res => console.log("2. res: ", res));

const request_then = request.then(res => res);

console.log("3. request_then: ", request_then);

request_then.then(res => console.log("4. res en el then posterior: ", res.json()));

/* Resumen de lo anterior: Correcto!
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log("data es: ", data));
*/

// setTimeout(() => console.log("request: ", request), 10000);
// setInterval(() => console.log("request: ", request), 2000);
/*
const request_json = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await request_json.json();
*/
// Ya!