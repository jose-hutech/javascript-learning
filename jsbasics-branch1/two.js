console.log (" HELLO  ")

// JS Dates

const a = new Date();
console.log(a);
const b = new Date(2020,3,9);
console.log(b);
const c= a.toDateString();
console.log(a.toDateString());
console.log(c);

// JS Math

let d = Math.sin(60*Math.PI/180);
console.log(d);
console.log(Math.log(2));
console.log(Math.pow(5,3));

// JS Random

console.log (Math.floor(Math.random()*10)+1); // returns a random number from 1 to 10 (both included)
console.log(Math.floor(Math.random()*5)+1); // returns a random number from 1 to 5 (both included)

// JS Boolean

console.log(Boolean(0)); // false
console.log("Any expression except '0','-0','\" \"',undefined ,null,NaN,false  is " + Boolean(-6)); // true


// JS Comparisons

let i=9;
let j=5;
console.log(i<10&&j>1); // logical operators
console.log (i<10||j<1);
console.log(!(i==j));

let agee= 23;
let voteable = (agee>18)? "able to vote" : " not able to vote";
console.log(voteable);

// JS If Else 

let p=6;
let q=5;
let r=7;
let biggest;
if(p>q && p>r){
   biggest = p ;
}
else if(q>r){
    biggest = q;
}
else{
    biggest = r;
}
console.log("the greatest among three numbers is " + biggest);

// JS Switch

let day = new Date().getDay();
let Itis;

switch (day){
    case 0: 
        Itis = "Sunday";
         break;

    case 6:
        Itis = "Saturday";
        break;

    default:
        Itis = "a weekday" ;   
}

console.log("Today is " + Itis);

// JS Loop for
const veg = ["gobi","pulav","noodles","biriyani","dosa"];
let term = "";
for(let i=0; i< veg.length;i++){
    term += veg[i] + "\n";
}
console .log (term);

for ( x of veg){
    console.log (x);
}


// JS Loop for in

const actors = ["suriya","STR","vijay","alluarjun","ranveer"];
let list = "";
for(let x in actors){
list+= actors[x] + "\n";
}
console.log(list);

const artist = { Aname : "STR", songs : "fourty",movies: "30" };
let record  = "";
for (let x in artist){
    record+=artist[x] + " " ;
}
console.log (record );

// JS Loop for of 

let country = "switerland";
let letters = "";

for(let x of country){
    letters += x + "\n" ;
}
console.log ( letters);

// JS while

let text = "";
let l=0;
do{
    text+= l + "\n";
    l++
}while (l<10);

console.log(text);

// JS Break
let numerals= "";
for(let i=0;i<10;i++){
    if (i==5){
        continue;
    }
    numerals+= i + "\n";

}
console.log(numerals);

// JS Iterables

const abc = new Map ([ 
    ["ronaldo",843],["messi",798],["neymar",504]
]);

let order ="";
for (let x of abc){

    order+= x + "\n";
}

console.log(order); 

for(x of abc){
    console.log (x);
}


const word = "Jose Christopher"

for(let x of word){
    console.log (x);
}

// JS Set

const countries = new Set (["India","USA","France","Canada"]);
countries.add("Russia");
for( x of countries){
    console.log (x);
}
let read = "";
countries.forEach(various);
function various(value){
read+= value + "\n";
}
console .log (read);

// JS Maps

const nations = new Map([
    ["India", "delhi"],["germany", "berlin"],["England", "london"]
]);

 for ( x of nations.entries()){
    console.log (x);
} 

console.log(nations.size) ;
nations.set ("france","paris");
nations.delete( "England","london");

let mention ="";
nations.forEach(function(value,key){
    mention += value+ "  "+key + "\n";
});

console.log(mention);
console.log(nations.get("germany"));


// JS Typeof

let continent = ["asia","africa","antartica","australia"];
console.log (isArray (continent));
function isArray(myArray){
   return myArray.constructor === Array;
}

console.log ( continent instanceof Array);
console.log ( continent instanceof Object);

// JS Type Conversion

let e = "jose"; // unary operator
let f = +e;
console.log ( typeof e + "   " + typeof f);
console.log (Number(Math.PI));
console.log(Number("jose"));
g = new Date();
console.log(g.toString());
console.log(Number(true));
console.log(String(true));








