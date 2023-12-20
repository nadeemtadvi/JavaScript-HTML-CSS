/* // Hoisting
console.log(a);
var a=2;
// Function
function abcd(a,b,c){    //parameter pass
    console.log(a,b,c);
}
abcd(19,3,99)    //Argument pass

// Array
let arr=[1,2,4,true,'hello']
// console.log(arr)

let a=[1,2,3,5,6]
a.push(4);        //Add value End
a.pop();          //Remove value End
a.unshift(8)       //Add value front
a.shift()          //Remove value front
a.splice(1,2)      //index 1 se 2 value remove

console.log(a)

//var kahi bhi use ho rha hai for loop k bahar bhi 
// function abcd(){
//     for(var i=1;i<10;i++){
//         console.log(i);    
//     }
//     console.log(i);
// }
// abcd();

// Copy reference Value
let a=[1,2,3,4,5];
let b=[...a];
console.log(a);
b.pop();
console.log(b);

let obj={name:'raju'};
let d={...obj};
console.log(obj);
console.log(d);

*/
// falsy = 0 false undefined null NaN document.all
// truthy

// if(NaN){
//     console.log("sahi hai kya")
// }
// else{
//     console.log("nhi hai")
// }

// foreach loop array pr chlta hai
// let a=[1,2,3,4,5,6]
// a.forEach(function(val){
//     console.log(val);
// })

// forin loop object pr chlta hai
// const b={name:'shekhar',age:25,city:'Ujjain'}
// for (const key in b) {
// console.log(`${key} - ${b[key]}`);
// }

// callback function
// setTimeout(function(){
//     console.log('2 sec baad run ');

// },2000);

// first class function - pass function as a aurgument
// function abcd(a){
//     a();
// }
// abcd(function(){console.log('A1 class function');})


// let a=[]
// console.log(Array.isArray(a))

// constructor function
// function boxe(){
//     this.width=12;
//     this.heght=12;
//     this.color='black';
    
// }

// let box1=new boxe();
// let box2=new boxe();
// let box3=new boxe();

// console.log(box1);
// console.log(box2);
// console.log(box3);

// function abcd(){
//     this.age=12;

// }
// new abcd()


// iife imediate invoked function expression
// let ans=(function(){
//     let privateval=12;
//     return{
//         getter:function(){
//             console.log(privateval);
//         },
//         setter:function(val){
//             privateval=val;
//         }
//     }
// })()

// Prototypal Inheritance
// let human={
//     canfly:false,
//     cantalk:true,
//     canwalk:true
// }
// let csstudent={
//     cancreatewebsite:true,
//     canmakeanimation:true
// }
// csstudent.__proto__=human;

// // Event Listener
// let button=document.querySelector("button");
// button.addEventListener("click",function(){
//     console.log(this.style.color="red");
// })

// call apply bind
// function abcd(){
//     console.log(this);
// }

// Question and Answer
// Rever Each word
// input - hello kaise ho
// output - olleh esiak oh

// var str ='hello kaise ho';
// var rev=str.split(' ').map(function(word){
//     return word.split('').reverse().join('')
// })
// console.log(rev.join(' '));

// Check if an object is an array or not

// function CheckArray(elem){
//     return Array.isArray(elem)
// }
// console.log(CheckArray({}));
// console.log(CheckArray([]));

// Check if no. is  an integer

// var a=12;
// if(a%1===0){
//     console.log("integer");
// }else{
//     console.log('not integer');
// }

// duplicate [1,2,3,4,5]

// function duplicate(arr){
//     return arr.concat(arr)
// }
// console.log(duplicate([1,3,4,6]));

// Reverse a no.

// function reversekaro(num){
//     return Number(num.toString().split('').reverse().join(''))
// }
// console.log(reversekaro(123))

// OR 

// function reversekaro(num){
//     var rev=0;
//     while(num>0){
//         var digit=num%10;
//         rev=rev*10+digit;
//         num=Math.floor(num/10);
//     }
//     return rev
// }
// console.log(reversekaro(123));

// String is palidrome or not

// function pali(str){
//     var rev=str.split("").reverse().join("");
//     return rev===str
// }
// console.log(pali("loop"));
// console.log(pali("lool"));

// input - apple
// output - aelpp

// function strAlpha(str){
//     return str.split("").sort().join("");
// }
// console.log(strAlpha("netherland"));

// convert 1st letter uppercase of word

// function CapitalOne(str){

//     var allw=str.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase()+word.substring(1)
//     })
//     return allw.join(" ");
// }
// console.log(CapitalOne("Harsh Bhai kaise ho"));

// No. of occurrence of each word

// function occur(str){
//     var occ={};
//     str.split("").forEach(function(elem){
//         if (occ.hasOwnProperty(elem)===false){
//             occ[elem]=1;
//         }
//         else{
//             occ[elem]++;
//         }
//     })
//     return occ
// }
// console.log(occur("apple"));

// sum each elements of an array

// var arr=[1,2,3,4,5];
// var sum=0;
// arr.forEach(function(elem){
//     sum=sum+elem;
// })
// console.log(sum);

// add those element which are not string

// var arr=[2,4,'hi',6,'bye',8];
// var sum=0;
// arr.forEach(function(elem){
//     if(typeof elem==='number'){
//         sum=sum+elem;
//     }
// })
// console.log(sum);

// remove all objects which do not have genders value

// var arr=[{name:'harsh',gender:'male'},{name:'raju',gender:'male'},{name:'rani',gender:'female'}];
// var newarr=arr.filter(function(elem){
//     return elem.gender=="female";
// })
// console.log(arr=newarr);


// clone an array  

// function clonearr(arr){
//     return [...arr]
// }
// or
// function clonearr(arr){
//     var narr=[];
//     arr.forEach(function(elem){
//         narr.push(elem);
//     })
//     return narr
// }
// or
// function clonearr(arr){
//     return arr.map(function(e){
//         return e
//     })
// }


// var newarr=[1,2,3,4];
// console.log(clonearr(newarr))

// get 1st element of an array passing  parameter 'n' element of the array


// find most frequent item of an array

//  function freq(arr){
//     var f={};
//     arr.forEach(function(i){
//         if(f.hasOwnProperty(i))f[i]++;
//         else f[i]=1;
//     })
//     // console.log(f);
//     var ans=Object.keys(f).reduce(function(acc,num){
//         return f[acc]>f[num]?acc:num
//     })
//     console.log(ans);

//  }
 
//  freq([1,2,3,5,6,3,2,1,1]);

// shuffle an array

// compute union of two arrays

// function union(arr1,arr2){
//     return [...new Set(arr1.concat(arr2))]
// }
// console.log(union([1,2,3,4,6,6],[2,3,4,5,2,3,7,8]));

// let const

// Arrow function
// var a=()=>{};
// var b=param=>{};
// var b=(param1,param2)=>{};
// b(2,5);
// var b=()=>12;
// console.log(b());

// rest and spread
// rest
// function abcd(a,b,c,...d){
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4,5,6,7,8,9);

// Destructuring
// var a=[1,2,3];
// var [b,c]=a;
// console.log(`a=${a} and b=${b}  and c=${c}`)     //backtick use

// Chai Aur code
// Variable
// const a=1234;
// let b='a@g.com';
// var c='1234';
// d='goa';

// console.table([a,b,c,d]);

// const arr=[1,2,3,4];
// const arr2=new Array(1,2,3,4);

// arr.push(6);
// arr.unshift(6);
// arr.pop();
// arr.shift()
// console.log(arr.indexOf(2));
// console.log(arr.includes(4));
// console.log(arr);

// console.log(arr[1]);
// console.log(arr2[0]);

// const newarr=arr.join();
// console.log(arr);
// console.log(newarr);

// const m=['thor','spidy','ironman'];
// console.log(m[1][1]);

// const n=['superman','flash','batman'];
// const p=m.concat(n);
// console.log(p);

// const all=[...m,...n];
// console.log(all);

// const r=[1,2,3,[4,5],6,[7,[8,9]]];
// const newr=r.flat(Infinity);
// console.log(newr);


// console.log(Array.from('raju'));
// console.log(Array.from({name:'raju'}));

// let s1=12;
// let s2=16;
// let s3=15;
// console.log(Array.of(s1,s2,s3));

// #object
// const m=Symbol('key');
// const user={name:'raju','fullname':'raju kumar',[m]:'mykey',age:15,email:'a@g.com',day:['monday','sunday']};
// console.log(user.email);
// console.log(user['email']);
// console.log(user['fullname']);
// console.log(user[m]);

// user.greet=function(){
//     console.log('hello');
// }

// user.greettwo=function(){
//     console.log(`hello,${this.name}`);
// }
// console.log(user.greet());
// console.log(user.greettwo());

// const a=new Object()
// const t={};

// t.id='12a';
// t.name='raju';
// t.log=false;
// console.log(t);

// console.log(Object.keys(t));
// console.log(Object.values(t));
// console.log(Object.entries(t));
// console.log(Object.hasOwnProperty('log'));

// const r={a:'a@g.com',fullname:{b:{c:'raju',d:'kumar'}}};
// console.log(r.fullname.b.d);
