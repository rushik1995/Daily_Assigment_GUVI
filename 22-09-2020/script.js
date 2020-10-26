let container = createElement("div", "container");
let row1 = createElement("div", "row");
let row2 = createElement("div", "row");
let row3 = createElement("div", "row");
row3.className += " display";

let tableHeaders = ["ID", "First Name", "Last Name", "Address", "Pincode", "Gender", "Food", "State", "Country"];

let heading = createElement("h1");
heading.innerHTML = "USER DETAILS";
row1.appendChild(heading);

let form = createElement("form");
form.method = "POST";

let table = createElement("table");

let tr1 = createTr("first_name", "First Name :", "text", "", "First Name", "first_name");
let tr2 = createTr("last_name", "Last Name :", "text", "", "Last Name", "last_name");
let tr3 = createTr("address", "Address :", "text", "", "Address", "address");
let tr4 = createTr("pincode", "Pincode :", "text", "", "Pincode", "pincode");

let tr5 = createElement("tr")
let tr5td = createElement("td");
let tr5Label = createElement("label");
tr5Label.for = "gender";
tr5Label.innerHTML = "Gender :";
tr5td.append(tr5Label);
let tr5td2 = createElement("td");
createGender("male", "Male", "Male", "male");
createGender("female", "Female", "Female", "female");
createGender("other", "Other", "Other", "other");
tr5.append(tr5td, tr5td2);

let tr6 = createElement("tr");
let tr6td1 = createElement("td");
tr6td1.innerHTML = "Choice of food (minimum 2) :";
let tr6td2 = createElement("td");

createFood("indian", "Indian");
createFood("mexican", "Mexican");
createFood("thai", "Thai");
createFood("korean", "Korean");
createFood("salad", "Salad");
tr6.append(tr6td1, tr6td2);

let tr7 = createTr("state", "State :", "text", "", "State", "state");

let tr8 = createTr("country", "Country :", "text", "", "Country", "country");

table.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8);

let button = createElement("button", "btn");
button.type = "submit";
button.innerHTML = "Submit";

form.append(table, button);

row2.append(form);

let displayTable = createElement("table", "displayTable");
let thead = createElement("thead");
createHead();

function createHead() {

  let tr = createElement("tr");
  for (let i = 0; i < tableHeaders.length; i++) {
    let th = createElement("th");
    th.innerHTML = tableHeaders[i];
    tr.append(th);
  }
  thead.append(tr);
}

let tBody = createElement("tbody", "", "enterData");
displayTable.append(thead, tBody);

row3.append(displayTable);

container.append(row1, row2, row3);

document.body.append(container);

function createFood(labelFor, labelText) {
  let label = createElement("label");
  label.setAttribute("for", labelFor);
  label.innerHTML = labelText;

  let inp = createElement("input");
  inp.type = "checkbox";
  inp.id = labelFor;
  inp.name = "food";
  inp.value = labelText;
  tr6td2.append(label, inp);
}


function createGender(labelFor, labelText, inputValue = "", inputId) {
  let label = createElement("label");
  label.setAttribute("for", labelFor);
  label.innerHTML = labelText;

  let inp = createElement("input");
  inp.type = "radio";
  inp.id = inputId;
  inp.name = "gender";
  inp.value = inputValue;
  tr5td2.append(label, inp);
}

function createTr(labelFor, labelText, inputType, inputValue = "", inputPlaceholder, inputId) {
  let temp = createElement("tr");
  let td1 = createElement("td");
  let label = createElement("label");
  console.log(labelFor);
  label.setAttribute("for", labelFor);
  label.innerHTML = labelText;
  td1.appendChild(label);

  let td2 = createElement("td");
  let inp = createElement("input");
  inp.type = inputType;
  inp.value = inputValue;
  inp.placeholder = inputPlaceholder;
  inp.id = inputId;
  inp.required = true;
  td2.appendChild(inp);

  temp.append(td1, td2);
  return temp;
}


let display = document.querySelector(".display");
let form1 = document.querySelector("form");

let userCount = 0;

let userModel = {
  FirstName: "",
  LastName: "",
  Address: "",
  Pincode: "",
  Gender: "",
  Food: [],
  State: "",
  Country: "",
};

let arr = [];
let food = [];
let users = [];

let button1 = document.querySelector(".btn");

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let it = e.target;
  for (let i = 0; i < it.length - 1; i++) {
    if (i === 4 || i === 5 || i === 6) {
      if (it[i].checked) arr.push(it[i].value);
    } else if (i == 7 || i == 8 || i == 9 || i == 10 || i == 11) {
      if (it[i].checked) {
        food.push(it[i].value);
      }
    } else arr.push(it[i].value);
  }

  let [FirstName, LastName, Address, Pincode, Gender, State, Country] = arr;
  userModel.FirstName = FirstName;
  userModel.LastName = LastName;
  userModel.Address = Address;
  userModel.Pincode = Pincode;
  userModel.Gender = Gender;
  userModel.Food = food;
  userModel.State = State;
  userModel.Country = Country;

  displayOnScreen();
  food = [];
});

function displayOnScreen() {
  let temp = createElement("tr");
  let enterData = document.querySelector("#enterData");
  temp.append(++userCount);
  for (let key in userModel) {
    let td = createElement("td");
    if (typeof key == "array") {
      td.innerHTML = userModel[key].split(", ");
    } else td.innerHTML = userModel[key];
    temp.append(td);
    console.log(temp);
  }
  enterData.appendChild(temp);
}

function createElement(tagName, className, id = "") {
  let temp = document.createElement(tagName);
  if (className)
    temp.className = className;
  if (id)
    temp.id = id;
  return temp;
}