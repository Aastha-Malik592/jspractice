// if else 
let age=19;
if(age>18){
    console.log("user can play ddlc");
}
else{
    console.log("user can play mario");
}

let num=14;
if(num%2===0){
    console.log("it is an even number");
}
else{
    console.log("it is a odd number");
}

// ternary operator or conditional operator
let person_age=45;
let drink=person_age>=5?"coffe":"milk";
console.log(drink);

let per=19;
let driving_licence=per>=18?"can drive":"not eligible";
console.log(driving_licence);

//and or operator
let a=20;
let first_Name="Aastha";
if(first_Name[0]==='A'&&a>=18){
    console.log("you are above eigtheen and your name starts with a");
}
else{
    console.log("not valid");
}
let ag=20;
let first="Aastha";
if(first[0]==='A'||ag>=18){
    console.log("inside if");
}
else{
    console.log("inside else");
}
//nested if else
let winning_number=19;
let guessed_number=+prompt("guess a number");
console.log(guessed_number);
if(guessed_number==winning_number){
    console.log(" you won");
}
else if(guessed_number>winning_number){
    console.log(" too high");
}
if(guessed_number<winning_number){
    console.log(" too low");
}

let temp=16;
if( temp<0){
    console.log("it's extremely cold outside");
}
else if(temp<160){
    console.log("it's cold outside");
}
else if(temperature<30){
    console.log("it's  hot outside");
}
else if(temperature<40){
    console.log("it's extremely hot outside");
}
else{
    console.log("temp is not in the range");
}



let day=6;
if(day===0){
    console.log("its sunday");
}
else if(day===1){
    console.log("its monday");
}
else if(day===2){
    console.log("its tuesday");
}
else if(day===3){
    console.log("its wednsday");
}
else if(day===4){
    console.log("its thursday");
}
else if(day===5){
    console.log("its friday");
}
else if(day===6){
    console.log("its saturday");
}
else{
    console.log("invalid");
}

// switch case
let week_day=3;
switch(week_day){
    case 0:
        console.log("sunday");
case 1:
console.log("monday");
break;
case 2:
console.log("tuesday");
break;
case 3:
console.log("wednesday");
break;
case 4:
console.log("thursday");
break;
case 5:
console.log("friday");
break;
case 6:
console.log("saturday");
break;
default:
    console.log("not valid");
}
//while loop
let x=0;
while(x<=5){
    console.log(x);
    x++;
}
let i=0;
let total=0;
while(i<10){
    total=total+i;
    i++;
}
console.log(total);







//for loop
let n=0;
for(n=0;n<10;n++){
    console.log(n);
}
let sum=0;
let t=0;
for(t=0;t<10;t++){
    sum=sum+t;

}
 console.log(sum);


// break and continue keyword
let s=0;
for(s=0;s<10;s++){
    if(s===2){
        break; //break the loop 
    }
    console.log(s);
}

let f=0;
for(f=0;f<10;f++){
    if(f===2){
        continue;//skips the command
    }
    console.log(f);
}

// do while loop
let g=10;
do{
    console.log(g);
    i++;
}
while(g<9){
    
}