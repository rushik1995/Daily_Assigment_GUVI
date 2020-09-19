var bound = create('div', 'boundary')
var ban = create('div', "banner")
var profile = createimg('rushi.jpg')
var dname = create('div', "name");

var h = create('h2')
h.innerHTML = "EDEN GARDEN"

var cnt = create('div', 'contact');
var hr = create('hr');
var details = create('div', "details");
var pcntct = create('p');
pcntct.innerHTML = "N.Damen Avenue, Chicago99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com"

var h2 = create('h2');
h2.innerHTML = `<i style="font-size:24px" class="fas fa-male"></i> Carrer Obective`

var p = create('p');
p.innerHTML = "To pursue a challenging career and work for a esteemed organization where I can contribute my skills for both my personal and the organizational growth."

var h22 = create('h2');
h22.innerHTML = `<i style='font-size:24px' class='fas fa-skiing-nordic'></i> Technical Skills`;

var ul = create('ul', 'skills');
var li1 = createli(ul, 6);

var labelC = createLabel('Cprog', 'javaScript');
var labelcshp = createLabel('csharp', 'CSS');
var labeljs = createLabel("js", "HTML");
var labelhtml = createLabel('html', 'HTML');
var labelcss = createLabel('css', "CSS");
var labelsql = createLabel('sql', "Mongo");
var progressC = createProgress(80, 'Cprog');
var progressCshp = createProgress(50, 'csharp')
var progressJs = createProgress(75, 'js');
var progressHtml = createProgress(60, 'html');
var progressCss = createProgress(50, 'css');
var progressSql = createProgress(40, 'sql');

var h23 = create('h2');
h23.innerHTML = `<i style='font-size:24px' class='fas fa-vials'></i> Work Experience`;

var h41 = create('h4');
h41.innerHTML = `Event Manager &#xf0b1;&#xf0b1;&#xf0b1;           03/2014-02/2017`;

var ul2 = create('ul');
var li2 = createli(ul2, 4);
li2[0].innerHTML = "Lead and execute all phases of event planning"
li2[1].innerHTML = "production spanning committee recruitment,training"
li2[2].innerHTML = "vendor relationships and on-site facilitation."
li2[3].innerHTML = "Brought new business to the organization through relentless nerworking and stewardship which helped the company win the bid for the state Department Summit on the Middle East and, the companies largest civic event to date,"

var h42 = create('h4');
h42.innerHTML = `Web Designer`;

var ul3 = create('ul');
var li3 = createli(ul3, 3);
li3[0].innerHTML = "Exercise fiscal control over budget creation, tracking and reporting."
li3[1].innerHTML = "Collaborate with employess at all organizational level to advance cohesive operations."

var h23 = create('h2');
h23.innerHTML = `<i style='font-size:24px' class='fas fa-vials'></i> Work Experience`;
var h43 = create('h4');
h43.innerHTML = `Application Support Engineer, Tata Consultancy Services (26.10.2017-31.07.19)`;

var ul4 = create('ul');
var li4 = createli(ul4, 3);
li4[0].innerHTML = "Gay & Lesbian Elder Housing, Los Angeles"
li4[1].innerHTML = "Designing a PR plan and establishing important focus points."
li4[2].innerHTML = "Designing,creating and managing content across multiple communication platforms."


var h24 = create('h2');
h24.innerHTML = `<i style='font-size:24px' class='fas'>&#xf19d;</i> Education`;

var ul5 = create('ul');
var li5 = createli(ul5, 3);
li5[0].innerHTML = `<strong>Project-focused intensive program</strong> focused intensive program with emphasis on Mongo`
li5[1].innerHTML = `<strong>Expres </strong>React, and JavaScript(MERN)technical stack.`;
li5[2].innerHTML = ` <strong></strong> Developed a full-stack web application,`;

var h25 = create('h2');
h25.innerHTML = `<i style='font-size:24px' class='fas fa-volleyball-ball'></i> Extra Skills`;

var ul6 = create('ul');
var li6 = createli(ul6, 4);
li6[0].innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`
li6[1].innerHTML = `eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
li6[2].innerHTML = `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
li6[3].innerHTML = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit`;

document.body.append(bound);
bound.append(ban, cnt, hr, details);
ban.append(profile, dname);
dname.appendChild(h);
cnt.append(pcntct);
details.append(h2, p, h22, ul, h23, h41, ul2, h42, ul3, h43, ul4, h24, ul5, h25, ul6);
li1[0].append(labelC, progressC);
li1[1].append(labelcshp, progressCshp);
li1[2].append(labeljs, progressJs);
li1[3].append(labelhtml, progressHtml);
li1[4].append(labelcss, progressCss);
li1[5].append(labelsql, progressSql);


function create(element, classname) {
    var t = document.createElement(element);
    if (classname)
        t.setAttribute('class', classname);

    return t;
}

function createimg(source) {
    var i = document.createElement('img');
    i.setAttribute('src', source);
    return i;
}


function createli(elem, num) {
    var arr = []
    for (let i = 0; i < num; i++) {
        arr.push(document.createElement('li'));
        elem.appendChild(arr[i]);
    }
    return arr;
}

function createLabel(forname, text) {
    var a = document.createElement('label');
    a.setAttribute('for', forname);
    a.innerHTML = text;
    return a;
}

function createProgress(val, idname) {
    var d = document.createElement('progress');
    d.id = idname;
    d.setAttribute('value', val);
    d.setAttribute('class', 'progressbar');
    d.setAttribute('max', 100);
    return d;
}
