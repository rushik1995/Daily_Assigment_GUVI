var main = document.createElement('div');
main.setAttribute('id', 'main');
document.body.appendChild(main);
//
// document.getElementById('main');
var bg = document.createElement('div');
bg.setAttribute('class', 'bg');
document.body.appendChild(bg);
//
var form = document.createElement('form');
form.setAttribute('id', 'Form');
form.setAttribute('name', 'form');
const a = document.getElementById('main');
a.appendChild(form);
//
var inputText = document.createElement('input');
inputText.setAttribute('class', 'textview');
inputText.setAttribute('name', 'textview');
const b = document.getElementById('main').getElementsByTagName('form')[0];
b.appendChild(inputText);

//
var table = document.createElement('table');
a.appendChild(table);

//
table_row();
table_data("C" ,0);
var clear = document.getElementsByTagName('input')[1];
clear.setAttribute("onclick", "clean()");

table_data("<", 0);
var clear = document.getElementsByTagName('input')[2];
clear.setAttribute("onclick", "back()");
// table_data("/", 0 , "/");
let tabledata = document.createElement('td');
let inputButton = document.createElement('input');
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('class', 'button');
inputButton.setAttribute('value', "/");
inputButton.setAttribute('onclick',"insert('/')");
let e = document.getElementsByTagName('tr')[0];
let f = e.appendChild(tabledata);
let g = f.appendChild(inputButton);
//
// table_data("X", 0 , "X");
function firstData(){let tabledata = document.createElement('td');
let inputButton = document.createElement('input');
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('class', 'button');
inputButton.setAttribute('value', "X");
inputButton.setAttribute('onclick',"insert('X')");
let e = document.getElementsByTagName('tr')[0];
let f = e.appendChild(tabledata);
let g = f.appendChild(inputButton);
return g;
}
firstData();
//
table_row();
table_data("7" , 1, 7);
table_data("8" , 1, 8);
table_data("9" , 1, 9);
// table_data("-" , 1, "-");
function secondData(){let tabledata = document.createElement('td');
let inputButton = document.createElement('input');
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('class', 'button');
inputButton.setAttribute('value', "-");
inputButton.setAttribute('onclick',"insert('-')");
let e = document.getElementsByTagName('tr')[1];
let f = e.appendChild(tabledata);
let g = f.appendChild(inputButton);
return g;
}
secondData();
//
table_row();
table_data("4" , 2, 4);
table_data("5" , 2, 5);
table_data("6" , 2, 6);
// table_data("+" , 2, "+");
function thirdData(){let tabledata = document.createElement('td');
let inputButton = document.createElement('input');
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('class', 'button');
inputButton.setAttribute('value', "+");
inputButton.setAttribute('onclick',"insert('+')");
let e = document.getElementsByTagName('tr')[2];
let f = e.appendChild(tabledata);
let g = f.appendChild(inputButton);
return g;}
thirdData();
//
table_row();
table_data("1" , 3, 1);
table_data("2" , 3, 2);
table_data("3" , 3, 3);
// table_data("=" , 3, "=");
function forthData(){let tabledata = document.createElement('td');
tabledata.setAttribute("rowspan", "5");
let inputButton = document.createElement('input');
inputButton.setAttribute("id", "row");
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('class', 'button');
inputButton.setAttribute('value', "=");
inputButton.setAttribute('onclick', "equal()");
let e = document.getElementsByTagName('tr')[3];
let f = e.appendChild(tabledata);
let g = f.appendChild(inputButton);
return g;
}
forthData();
//
table_row();
table_data("0" , 4, '0');
// var zero = document.getElementsByTagName('input')[17];
// zero.setAttribute("id", "zero");
//
// var zero = console.log(document.getElementsByTagName('td')[16]);
// zero.setAttribute("colspan", "2");
//
function fifthData(){let tabledata = document.createElement('td');
let inputButton = document.createElement('input');
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('class', 'button');
inputButton.setAttribute('value', ".");
inputButton.setAttribute('onclick', "insert('.')");
let e = document.getElementsByTagName('tr')[4];
let f = e.appendChild(tabledata);
let g = f.appendChild(inputButton);
return g;
}
fifthData();
//
function table_row(){
  let tablerow = document.createElement('tr');
  let c = document.getElementsByTagName('table')[0];
  let d = c.appendChild(tablerow);
  return d;
}
//
function table_data(val , num , char){
  let tabledata = document.createElement('td');
  let inputButton = document.createElement('input');
  inputButton.setAttribute('type', 'button');
  inputButton.setAttribute('class', 'button');
  inputButton.setAttribute('value', val);
  if(char){
  inputButton.setAttribute('onclick',"insert("+char+")");
}
  let e = document.getElementsByTagName('tr')[num];
  let f = e.appendChild(tabledata);
  let g = f.appendChild(inputButton);
  return g;
}
//
// console.log(document.getElementsByTagName('inputButton'));

function insert(num){
  document.form.textview.value = document.form.textview.value + num;
}
//
function equal(){
  let exp = document.form.textview.value;
  if(exp){
    document.form.textview.value = eval(exp);
  }
}

function clean(){
  document.form.textview.value = "";
}

function back(){
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
}
