let username;
let age;
const pi=3.14;
let radius;
let circumference;
/*let x ="wekesa";
let y ="pizza";
letz ="mkuu";
let b=""
let r=true;
x=Number(x);
y=String(y);
z=Boolean(z)
b=Boolean(b)
r=Number(r)
console.log(typeof(x));
console.log(typeof(y)); 
console.log(typeof(z));
console.log(typeof(b));     
console.log(typeof(r));
console.log(x+y+z+b+r);
console.log(x-y-z-b-r);
console.log(x*y*z*b*r); */


document.getElementById("submission").onclick=function(){
   username=document.getElementById("jina").value;
    console.log(username);
document.getElementById("myh1").textContent=`hello ${username}`;
age=document.getElementById("myage").value;
console.log(typeof(age));

age=Number(age);
age+=1;
document.getElementById("myh2").textContent= `sasa miaka yako ni ${age}`;
radius=document.getElementById("radius").value;
circumference=2*radius*pi;
document.getElementById("circumference1").textContent=`mzunguko wa duara ni ${circumference}`;
   }
