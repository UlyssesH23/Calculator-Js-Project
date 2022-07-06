console.log("hellos")
const op = document.getElementById("output");
let opContent = op.innerHTML;
const b1 = document.getElementById('1');
const b2 = document.getElementById('2');
const b3 = document.getElementById('3');
let inputs= []; 
let results=[];

var gOne = function(){
    return 1;
}
var gOne = function(){
    return 1;
}
var add = function(){
    opContent.insertAdjacentText("afterend"," +");
}

b1.onclick = function () {
  inputs.push(gOne);
  opContent.insertAdjacentText("afterend"," 1");
 }

