console.log("hello !world");
//console print anything on console
var age=24;
var price=199.90;
var fullName="aastha malik";
console.log(age);
console.log(fullName);
console.log(price);
fullName="nandini malik";
console.log(fullName);
let radius=67;
console.log(radius);
const pi=3.14;
console.log(pi);
console.log(fullName[3]);
console.log(fullName.length);
console.log(fullName[fullName.length-1]);
console.log(fullName.length-1);
let fullname="harshit";
console.log(fullname.length);
// fullname=fullname.trim();
// console.log(fullname);
fullname=fullname.toUpperCase();
console.log(fullname);
fullname=fullname.toLowerCase();
console.log(fullname);
let newstring=fullname.slice(0,3);
console.log(newstring);
console.log(typeof age);
console.log(typeof fullname);
console.log(typeof (age+""));
 let mystr=10;
// mystr= +"10"
// console.log(typeof mystr);
mystr=String(mystr);
console.log(typeof mystr);
// string concatenation
let str1="aastha";
let str2="malik";
console.log(str1+" "+str2);
let string1="14";
let string2="10";
let totalstr=+string1+ +string2;
// totalstr=Number(totalstr);
console.log(totalstr);

//template string
let myname="aastha";
let myage="19";
let aboutme=`my name is ${myname} and my age is ${myage}`;
console.log(aboutme);
// null
let length;
console.log(length);
let breadth=null;
console.log(breadth);
let mynum=123;
console.log(Number.MAX_SAFE_INTEGER);

//big int
let rad=68n;
let r=45n;

console.log(rad)
//booleans and comparison
let n1=5;
let n2=89;
console.log(n1>n2);

//== vs ===
let n3=9;
let n4=9;
let n5="9";
console.log(n3==n4);
console.log(n4===n5);
// truthy falsy values 

//falsy values
// false
//""
// undefined
//null
//0