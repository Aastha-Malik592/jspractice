// objects 
// arrays are good but not enough
// for real world data
// objects store key value pairs
// objects don't have index
//object are reference types
const per={name:"aastha",age:19,hobbies:["playing","dancing"]};
console.log(per);

// how to acess objects
console.log(per.name);
// how to add key value pair to objects
per.gender="female";
// bracket notation
const person={name:"Aastha"};
console.log(person["name"]);

// how to iterate objects
const person_info={name:"Aastha",age:19};
// for in loop
//object.key

for (let key in person_info){
    console.log(person_info[key]);
}
console.log(Object.keys(person_info));
for(let key of Object.keys(person_info))
console.log(person_info[key]);

// computed properties
const obj1="key1";
const obj2="key2";
const val1="value1";
const val2="value2";
 const object={[obj1]:val1,[obj2]:val2

 }
 console.log(object);

 //spread  operator
 let array1=[8,9,7];
 let array2=[1,7,8];
 let newarr=[...array1,...array2];
 console.log(newarr);
 const k1={
    key1:"val1",
    key2:"val2"
 }
 const k3={
    key3:"val3"

 }
 const k2={...k1,...k3};
 console.log(k2);
 const newa={..."abc"};
 console.log(newa);

 //object destruction

 let band={
    bandname:"zeplien",
    famous_song:"heaven"
 };
 
 const{bandname,famous_song}=band;
 console.log(bandname);
 console.log(famous_song);

 // objects inside array
 const users=[
    {name:"aastha",age:19},
    {name:"ayushi",age:19}
 ]
 for(let user of users){
    console.log(users);
 }

 // nested destructuring
 const user=[
    {name:"aastha",age:19},
    {name:"ayushi",age:19}
,{name:"kashish",age:19} ]
 const [user1,user2,{age}]=user;
 console.log(user1);

 //