/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(data => {
    console.log(`id: ${data.id}, Name: ${data.name}, Age: ${data.age}, Profession: ${data.profession}`);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(data => {
    console.log(`id: ${data.id}, Name: ${data.name}, Age: ${data.age}, Profession: ${data.profession}`);
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"susan", age:"20", profession:"intern"});
  arr.forEach(data => {
    console.log(`id: ${data.id}, Name: ${data.name}, Age: ${data.age}, Profession: ${data.profession}`);
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  const newArray = arr.filter(data =>{
    return data.profession != "admin";
  })
  newArray.forEach(data => {
    console.log(`id: ${data.id}, Name: ${data.name}, Age: ${data.age}, Profession: ${data.profession}`);
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "tauheed", age: "18", profession: "developer" },
    { id: 5, name: "shama", age: "20", profession: "developer" },
    { id: 6, name: "saif", age: "19", profession: "admin" },
  ];
  let newArray = arr.concat(arr2);
  newArray.forEach(data => {
    console.log(`id: ${data.id}, Name: ${data.name}, Age: ${data.age}, Profession: ${data.profession}`);
  })
}
