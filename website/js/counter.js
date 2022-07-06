const counter = document.getElementById("visits")
let res = ""

fetch('https://whz247oqhc.execute-api.us-east-1.amazonaws.com/first/')
  .then(response => response.json())
  .then(data => counter.textContent = data);



