let request = new XMLHttpRequest();
let data = [];
let current = "";

let url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

request.open("GET", url, true);

request.onload = async function () {
  let temp = await JSON.parse(this.response);
  for (let i = 0; i < temp.length; i++) {
    data.push(temp[i]);
  }
};
request.send();

let end = 9,
  start = 0;

let content = document.querySelector("#content");
let pages = document.querySelector(".pages");

initial();

pages.addEventListener("click", (e) => {
  let event = e.target.value;
  if (!event) return;
  content.innerHTML = "";
  dispayPages(event);

  if (event === "first") {
    start = 0;
    end = 9;
    display(start, end);
  } else if (event === "previous") {
    start = Math.max(0, start - 10);
    end = start + 9;
    display(start, end);
  } else if (event === "last") {
    end = 99;
    start = end - 9;
    display(start, end);
  } else if (event === "next") {
    end = Math.min(99, end + 10);
    start = end - 9;
    display(start, end);
  } else {
    end = event * 10 - 1;
    start = end - 9;
    display(start, end);
  }
});

function initial() {
  let first = 2,
    last = 6;
  for (let i = 0; i < 2; i++) {
    let div = createElement("div", "col");
    let button;
    if (i == 0) {
      button = createButton("first");
    } else {
      button = createButton("previous");
    }
    div.append(button);
    pages.append(div);
  }

  for (let i = first; i <= last; i++) {
    let div = createElement("div", "col");
    let button = createButton(i);
    if (i === first) button.className += "min";
    if (i === last) button.className += "max";
    div.append(button);
    pages.append(div);
  }

  for (let i = 1; i < 3; i++) {
    let div = createElement("div", "col");
    if (i === 0) {
      div.innerHTML = "...";
    } else if (i === 1) {
      let button = createButton("last");
      div.append(button);
    } else {
      let button = createButton("next");
      div.append(button);
    }
    pages.append(div);
  }
  display(start, end);
}

function dispayPages(event) {
  let minPossible = 1,
    maxPossible = 10;
  event = event;
  let start = +document.querySelector(".min").value;
  let end = +document.querySelector(".max").value;
  if (
    +event === start ||
    +event === end ||
    event === "first" ||
    event === "previous" ||
    event === "next" ||
    event === "last"
  ) {
    pages.innerHTML = "";
    let first, last;
    if (+event === start) {
      first = Math.max(1, start - 1);
      last = first + 4;
    } else if (+event === end) {
      last = Math.min(maxPossible, end + 1);
      first = last - 4;
    } else if (event === "first") {
      first = 1;
      last = first + 4;
    } else if (event === "previous") {
      first = Math.max(1, start - 1);
      last = first + 4;
    } else if (event === "last") {
      last = 10;
      first = last - 4;
    } else if (event === "next") {
      last = Math.min(10, end + 1);
      first = last - 4;
    }
    for (let i = 0; i < 2; i++) {
      let div = createElement("div", "col");
      let button;
      if (i == 0) {
        button = createButton("first");
      } else {
        button = createButton("previous");
      }
      div.append(button);
      pages.append(div);
    }

    for (let i = first; i <= last; i++) {
      let div = createElement("div", "col");
      let button = createButton(i);
      if (i === first) button.className += "min";
      if (i === last) button.className += "max";
      div.append(button);
      pages.append(div);
    }

    for (let i = 1; i < 3; i++) {
      let div = createElement("div", "col");
      if (i === 0) {
        div.innerHTML = "...";
      } else if (i === 1) {
        let button = createButton("last");
        div.append(button);
      } else {
        let button = createButton("next");
        div.append(button);
      }
      pages.append(div);
    }
  }
}

function display(start, end) {
  for (let i = start; i <= end; i++) {
    let tr = createElement("tr");
    for (let key in data[i]) {
      let td = createElement("td");
      td.innerHTML = data[i][key];
      tr.append(td);
    }
    content.append(tr);
  }
}

function createButton(value) {
  let button = createElement("button");
  button.type = "button";
  button.value = value;
  button.innerHTML = value;
  return button;
}

function createElement(tagName, className) {
  let element = document.createElement(tagName);
  if (className) element.className = className;
  return element;
}