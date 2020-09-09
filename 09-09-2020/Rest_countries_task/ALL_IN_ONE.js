var xhttp = new XMLHttpRequest();
var url ='https://restcountries.eu/rest/v2/all';
xhttp.open("GET", url, true);
  xhttp.onload = function() {
    var data = JSON.parse(this.response);
    //1-Get the countries in asia - filter
    var counAsia= data.filter((item)=>(item.region==='Asia'));
    console.log(counAsia);
    //2-Get the countries with population less than 2L - fliter
    var popAsia= data.filter((item)=>(item.population<200000));
    console.log(popAsia);
    //3-Bumpup the current population  of all the counteirs by 1L - Map
    var bumpPop=data.map((item)=>item.population+100000);
    console.log(bumpPop);
    //4-convert all the names to capital - map
    var nameCaps=data.map((item)=>item.name.toUpperCase());
    console.log(nameCaps);
    //5-print follwoig details  name , capital , flag  - foreach,filter
    var b=[];
    var nameCapFlag= data.forEach((item)=>{
       b.push({name: item.name,capital: item.capital,flag: item.flag});
    });
    console.log(b);
    //6-Print the total population of the countries  - reduce
    var totPop=data.reduce((curtot,item)=>item.population+curtot,0);
    console.log(totPop);
    //Print the total population of the countries in asia - filter & reduce
    var totPop=data.filter(ele => ele.region === 'Asia').reduce((curtot,item)=>item.population+curtot,0);
     console.log(totPop);
  };
  xhttp.send();
