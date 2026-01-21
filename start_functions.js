// function that perform a specific task
// function happybirthday(){
//     console.log("happy birthday to you...");
// }
// happybirthday();
//  happybirthday();

//  function add(){
// console.log(4+8);
//  }
//  add();
//  add();
 function sumtwono(n1,n2){
    console.log(n1+n2);
 }
 sumtwono(8,9);
 sumtwono(6,4);
 sumtwono();

 function iseven(n1){
    if(n1%2===0){
    console.log("true");
 }
 else{
    console.log("false");
 }
}
iseven(4);

function istarget(arr,target){
 let i;
 for(i=0;i<5;i++){
 if(arr[i]===target){
    console.log(i);
 }
 else{
    console.log("not found");
 }
}
}
const arr=[56,90,7,9,3];

istarget(arr,90);

//function expression
const add=function(){
console.log(4+8);
 }
 add();

 // arrow function
 const happybirthday=()=>{
    console.log("happy birthday to you...");
}
happybirthday();

const add3no=(n1,n2,n3)=>{
    console.log(n1+n2+n3);
}
add3no(6,7,8);