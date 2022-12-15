// Numbers
let x = "jose" + 10 + 20 + 30; 
console.log(x);
// Arrays

let fruits = ["apple","orange","mango"] ;
fruits[fruits.length] = "guava";
console.log (fruits);
console.log(fruits[1]);

// Array Methods

const engg =["mech","civil","IT"] ;
const arts =["eng","maths","science"];
const course = engg.concat(arts);
console.log(course);
course.push("history");
console.log(course);
const three = course.slice(2,5);
console.log(three);

// Array Sort

const numb = [12,24,13,76,8,9];
console.log(numb);
numb.sort();
console.log(numb); // incorrect sorting for numbers
numb.sort(function(a,b){return a-b});
console.log(numb); // correct sorting

//Array Iteration

const foods = ["biriyani","parotta","tandoori","grill"];
let fav="";
foods.forEach(myFunction);
function myFunction(value){
fav+= value +"    " ;
}
console.log(fav);

const digits = [ 43,23,3,8,93] ;
const specific = digits.map(callFunction);

function callFunction(value){
    return value*2;
}
console.log(specific);

const greaterThan = digits.filter(greater);

function greater(value){
  return value > 18 ;
}
 
console.log (greaterThan);


// JS Hoisting

t= 16;
console.log(t*2);
var t;
u = 7;
console.log(u);
var u;
var v = 13;
console.log( "value of v and w is" + v + " "+ w);
var w = 5;
console.log ("jose");

// JS this keyword

const jose = {
  firstName :"johhny",
  lastName : "depp" ,
}

const chris = {
  fullName : function (){
   return this.firstName + "  " + this.lastName;
  }
}
console.log( chris.fullName.call(jose));

const person = {
  firstName : "lionel",
  lastName : " messi",
  fullName : function(){
    return this.firstName +"  "+this.lastName;
  }
}

const member = {
  firstName : "cristiano",
  lastName : "ronaldo"
}
naming=person.fullName.bind(member);
console.log(naming());
 
// Arrow function

const multiply = (a,b) => a*b ;
console.log(multiply(7,3));

let display = a => "hello" + a ;
console.log (display(5));


// JS JSON 

let detail = '{"employees":[' +
  '{"firstName": "jose" , "lastName":"christopher"},'+
  '{"firstName":"conor" , "lastName":"magregor"},'+
  '{"firstName":"sergio", "lastName":"ramos"}]}';

  const recordss =JSON.parse(detail);

  console.log(recordss.employees[1].firstName+"  "+recordss.employees[1].lastName);



  
 

















