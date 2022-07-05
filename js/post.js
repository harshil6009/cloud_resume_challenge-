let xhr = new XMLHttpRequest();
xhr.open("POST", "https://whz247oqhc.execute-api.us-east-1.amazonaws.com/first/");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }};

let data = `{
  "Id": 78912,
  "Customer": "Harshil Vaghela",
  "Quantity": 1,
  "Price": 18.00
}`;

xhr.send(data);