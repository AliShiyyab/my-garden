"use strict";

let objArr = [];
function garden(name , iamges , season){
    this.name=name;
    this.season=season;
    this.iamges = iamges;
    objArr.push(this);
}

let submitt = document.getElementById('submitt');
let result = document.getElementById('showResult');
let ulE = document.createElement('ul');
result.appendChild(ulE);

submitt.addEventListener('click' , function(event){
    event.preventDefault();
    
    let val1 = document.getElementById('nameInput').value;
    let val2 = document.getElementById('imageItem').value;
    let val3 = document.getElementById('seasonInput').value;

    //List Way:
    let liE = document.createElement('li');
    ulE.appendChild(liE);
    liE.textContent = `${val2}   ${val1}   ${val3}`;

    //It not works in the table way:
    /*let tablee = document.getElementById('table');
    let trE = document.createElement('tr');
    tablee.appendChild(trE);
    let th = document.createElement('th');
    tr.appendChild(th);
    for(let i = 0 ; i < objArr.length ; i++){
        th.textContent = objArr[i];
        for (let j = 0 ; j < 3 ; j++){
            let cell = document.createElement('td');
            tr.appendChild(cell);
            cell.textContent = this.objArr[i];
        }
    }*/
   

    new garden(val1,val2,val3);
    setData();
});

let deletee = document.getElementById('deletee');

deletee.addEventListener('click' , function(event){
    event.preventDefault();
    localStorage.clear();
});

function setData(){
    localStorage.setItem('Ali' , JSON.stringify(objArr));
}



function getData(){
    let input = localStorage.getItem('Ali');
    if(input){
        objArr = JSON.parse(input);

        for(let i = 0 ; i < objArr.length ; i++){
            let liE = document.createElement('li');
            ulE.appendChild(liE);
            liE.textContent = `${objArr[i].iamges}  -  ${objArr[i].name}  -  ${objArr[i].season}`;
        }

    }
}

getData();