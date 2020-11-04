// Table Code
var tbody1 = document.getElementById("team-1-players");
var tbody2 = document.getElementById("team-2-players");
function table(body) {
    // let this.tbody = tbody;
    for (var i = 1; i <= 11; i++) {
        var tr = document.createElement("tr");
        tr.id = "row" + i;
        var th = document.createElement("th");
        // th.id = `player${i}`;
        th.innerText = "player" + i;
        body.appendChild(tr);
        tr.appendChild(th);
        for (var j = 1; j <= 6; j++) {
            var td = document.createElement("td");
            td.id = "Ball" + i;
            // td.innerText = `Ball-${j}`;
            tr.appendChild(td);
        }
        var total = document.createElement("th");
        total.id = "total" + i;
        tr.appendChild(total);
    }
}
function table2(body) {
    // let this.tbody = tbody;
    for (var i = 13; i <= 23; i++) {
        var tr = document.createElement("tr");
        tr.id = "row" + i;
        var th = document.createElement("th");
        // th.id = `player${i}`;
        th.innerText = "player" + (i - 12);
        body.appendChild(tr);
        tr.appendChild(th);
        for (var j = 1; j <= 6; j++) {
            var td = document.createElement("td");
            td.id = "Ball" + i;
            // td.innerText = `Ball-${j}`;
            tr.appendChild(td);
        }
        var total = document.createElement("th");
        total.id = "total" + i;
        tr.appendChild(total);
    }
}
table(tbody1);
table2(tbody2);
// Class Section
var Game = /** @class */ (function () {
    function Game() {
        this.team = [];
    }
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(name) {
        this.players = [];
        this.score = 0;
        this.name = name;
    }
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(name, score, numberofBalls) {
        this.name = name;
        this.score = score;
        this.numberofBalls = numberofBalls;
    }
    return Player;
}());
// Hit Button working
var z = 1;
var x = 0;
var y = 0;
var sum = 0;
var totalScore = 0;
var hit1 = document.getElementById("hit-1");
var hit2 = document.getElementById("hit-2");
var ScoreDisplay = document.getElementById("ScoreDisplay");
var t1 = new Team('Team1');
var t2 = new Team('Team2');
var g1 = new Game();
hit1.setAttribute("onclick", "scoreCard(t1)");
hit2.setAttribute("onclick", "scoreCard(t2)");
hit2.setAttribute('disabled', 'disabled');
ScoreDisplay.setAttribute('disabled', 'disabled');
// Score Card
function scoreCard(t1) {
    var row = document.getElementById("row" + z).getElementsByTagName("td")[x];
    var total = document.getElementById("total" + z);
    var random = Math.floor(Math.random() * 6);
    sum += random;
    row.innerText = '' + random;
    total.innerText = '' + sum;
    if (random === 0 || x === 5) {
        var pl = (new Player("Player " + z, sum, x + 1));
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
        hit1.disabled = true;
        hit2.disabled = false;
        document.getElementById('score-1').innerText = totalScore.toString();
        totalScore = 0;
        z++;
    }
    if (z === 24) {
        g1.team.push(t1);
        t1.score = totalScore;
        console.log('Team 2 Over', g1);
        hit1.disabled = true;
        hit2.disabled = true;
        document.getElementById('score-2').innerText = totalScore.toString();
        ScoreDisplay.disabled = false;
    }
}
// Display Result
function Result() {
    var displayResult = document.getElementById('result');
    var score1 = t1.score;
    var score2 = t2.score;
    if (score1 > score2) {
        displayResult.innerHTML = "Team 1 Win the match by " + (score1 - score2) + " runs";
    }
    else {
        displayResult.innerHTML = "Team 2 Win the match by " + (score2 - score1) + " runs";
    }
}
