var getdata = function(){
    return new Promise(function(resolve,reject){
        let data = [];
        let request = new XMLHttpRequest();
        let urlrequest = "https://restcountries.eu/rest/v2/all";
        request.open('GET',urlrequest,true);
        request.send();
        request.onload = function() {
           data = JSON.parse(this.response)
        }
        setTimeout(function(){
            if(data.length>0){
                resolve(data)
                }
                else{
                reject('Error')
                }
        },5000)


    })
}

getdata()
    .then(function(data){
        let g = 3;
        let f =3;
        for(let i=3;i<=83;i++){
            let a = document.createElement('div');
            a.setAttribute('class','row')

            for(let j=0;j<3;j++){
                let col = colFun('div','col-4',j);
                let c = card('div','card');
                let d = head('div','card-header');
                let cb = card('ul','list-group');
                // let h = document.createElement('h5');
                // h.setAttribute('class','card-title');
                // h.append('Rest Country');
                let p1 = tag('li','list-group-item','latling'+g)
                let p2 = tag('li','list-group-item','flag'+g)
                let p3 = tag('li','list-group-item','region'+g)
                let p4 = tag('li','list-group-item','ccode'+g)
                let p5 = tag('li','list-group-item','cname'+g)
                let p6 = tag('li','list-group-item','name'+g)
                cb.append(p1,p2,p3,p4,p5,p6);
                c.append(d,cb);
                col.append(c);
                a.append(col);
                //con.append(a);
                g++;
            }
            document.body.append(a);


        }
        for(let i=3;i<=83;i++){

            for(let j=0;j<3;j++){

                for(let key in data[f]){

                    if(key=="name"){
                    document.getElementById('name'+f).innerHTML = data[f][key];
                    //console.log(data[i][key])
                    }
                    else if(key=="flag"){
                        document.getElementById('flag'+f).innerHTML = data[f][key];
                    }
                    else if(key=="region"){
                        document.getElementById('region'+f).innerHTML = data[f][key];
                    }
                    else if(key=="currencies"){
                        for(let key1 in data[f][key][0] ){
                            if(key1=="code"){
                                document.getElementById('ccode'+f).innerHTML = data[f][key][0][key1];
                            }
                            else if(key1 == "name"){
                                document.getElementById('cname'+f).innerHTML = data[f][key][0][key1];
                            }
                        }
                    }
                    else if(key=="latlng"){
                        for(let j=0;j<data[f][key].length;j++){
                            let a = document.getElementById('latling'+f).innerHTML;
                            document.getElementById('latling'+f).innerHTML=a+data[f][key][j]
                        }
                    }

                }
                f++;
            }
        }
    })
    .catch(function(err){
        console.log(err);
    })

function head(element,name){
        let a = document.createElement(element);
        a.setAttribute('class',name);
        // a.setAttribute('id',num);
        a.innerHTML = "Rest Country";
        return a;
}

function colFun(element,name,num){
    let a = document.createElement(element);
    a.setAttribute('class',name);
    a.setAttribute('id',num);
    a.setAttribute('style','margin-top: 20px');
    return a;
}

function card(ele,name,name1){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    // a.setAttribute('class',name1);
    // a.setAttribute('style','width: 18rem');
    return a;
}

function tag(element,name,num){
    let a = document.createElement(element);
    a.setAttribute('class',name);
    a.setAttribute('id',num);
    return a;
}
