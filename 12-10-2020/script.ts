// Table Code
let tbody1 = document.getElementById("team-1-players");
let tbody2 = document.getElementById("team-2-players");

function table(body) {
  // let this.tbody = tbody;
  for (let i = 1; i <= 11; i++) {
    let tr = document.createElement("tr");
    tr.id = `row${i}`;
    let th = document.createElement("th");
    // th.id = `player${i}`;
    th.innerText = `player${i}`;
    body.appendChild(tr);
    tr.appendChild(th);
    for (let j = 1; j <= 6; j++) {
      let td = document.createElement("td");
      td.id = `Ball${i}`;
      // td.innerText = `Ball-${j}`;
      tr.appendChild(td);

    }
    let total = document.createElement("th");
    total.id = `total${i}`
    tr.appendChild(total);
  }
}

function table2(body) {
  // let this.tbody = tbody;
  for (let i = 13; i <= 23; i++) {
    let tr = document.createElement("tr");
    tr.id = `row${i}`;
    let th = document.createElement("th");
    // th.id = `player${i}`;
    th.innerText = `player${i - 12}`;
    body.appendChild(tr);
    tr.appendChild(th);
    for (let j = 1; j <= 6; j++) {
      let td = document.createElement("td");
      td.id = `Ball${i}`;
      // td.innerText = `Ball-${j}`;
      tr.appendChild(td);

    }
    let total = document.createElement("th");
    total.id = `total${i}`
    tr.appendChild(total);
  }
}
table(tbody1);
table2(tbody2);

// Class Section

class Game {
  team: Array<Team> = [];
  winningTeam;
  manOfTheMatch;

  constructor() {

  }
}

class Team {
  name: string;
  players: Array<Player> = [];
  score: number = 0;

  constructor(name: string) {
    this.name = name;
  }
}

class Player {
  name: string;
  score: number;
  numberofBalls: number;

  constructor(name: string, score: number, numberofBalls: number) {
    this.name = name;
    this.score = score;
    this.numberofBalls = numberofBalls;
  }
}

// Hit Button working

let z = 1;
let x = 0;
let y = 0;
let sum = 0;
let totalScore = 0;
let hit1 = document.getElementById("hit-1");
let hit2 = document.getElementById("hit-2");
let ScoreDisplay = document.getElementById("ScoreDisplay");
let t1 = new Team('Team1');
let t2 = new Team('Team2')
let g1 = new Game();

hit1.setAttribute("onclick", "scoreCard(t1)")
hit2.setAttribute("onclick", "scoreCard(t2)")

hit2.setAttribute('disabled', 'disabled');
ScoreDisplay.setAttribute('disabled', 'disabled');

// Score Card
function scoreCard(t1) {

  let row = document.getElementById(`row${z}`).getElementsByTagName("td")[x];
  let total = document.getElementById(`total${z}`);

  let random = Math.floor(Math.random() * 6);
  sum += random;
  row.innerText = '' + random;
  total.innerText = '' + sum;
  if (random === 0 || x === 5) {
    let pl = (new Player(`Player ${z}`, sum, x + 1));
    t1.players.push(pl);
    totalScore += sum;
    x = 0;
    sum = 0;
    z++;
  }
  else {
    x++;
  }

  if (z === 12) {
    g1.team.push(t1);
    t1.score = totalScore;
    console.log('Team 1 Over', g1);
    (<HTMLInputElement>hit1).disabled = true;
    (<HTMLInputElement>hit2).disabled = false;
    document.getElementById('score-1').innerText = totalScore.toString();
    totalScore = 0;
    z++;
  }

  if (z === 24) {
    g1.team.push(t1);
    t1.score = totalScore;
    console.log('Team 2 Over', g1);
    (<HTMLInputElement>hit1).disabled = true;
    (<HTMLInputElement>hit2).disabled = true;
    document.getElementById('score-2').innerText = totalScore.toString();
    (<HTMLInputElement>ScoreDisplay).disabled = false;
  }
}

// Display Result
function Result() {
  let displayResult = document.getElementById('result');
  let score1 = t1.score;
  let score2 = t2.score;

  if (score1 > score2) {
    displayResult.innerHTML = `Team 1 Win the match by ${score1 - score2} runs`;
  }
  else {
    displayResult.innerHTML = `Team 2 Win the match by ${score2 - score1} runs`;

  }

}