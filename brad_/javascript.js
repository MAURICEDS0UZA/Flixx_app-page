// console.log("hello")
// console.error(" erro");
// console.table({sname:"sam",email:"sam@gmail.com"});
// console.warn("warning");
// console.group()
// console.log(100);
// console.log("hello");
// console.error(" erro");
// console.groupEnd;

// // variable :let , const ,var( global variable)
// let lastsName = "Maurice";
// const firstsName = "Dsouza";
// console.log(firstsName,lastsName);//underdefined//
// const age ="23";
// console.log(age)

// const ar = [1,2,3,4];
// // to manipulate array we use push func
// ar.push(1);
// console.log(ar)

// // mutiple assign value at once
// let a=27
// b=20
// c=10;
// d=23
// console.log(a,b,c,d)

// // data type
// const   firstValue = "gesture";
//         lastValue = 100;
// console.log(lastValue,typeof lastValue);
// console.log(firstValue,typeof firstValue);

// const sname='maam';
// let  sName=sname;

// console.log(sName,sname);
// let value="12";
// console.log(value,typeof value);
// // type conversion into number

// // value=parseInt(value);
// // value=+(value);
// value=Number(value);
// console.log(value,typeof value);

// // convert to string
// let value1 = 12
// output1=value1.toString();
// console.log(output1,typeof output1)


// /*type of coercion*/
// let x;
// x=2+2+'3';
// x=+'3';

// // console.log(x,typeof x);
// const name1 ="john";
// const age  =20;
// let out = `My name is ${name1} and Im ${age} old.`;
// console.log(out,typeof out);

// // tag =name1.__proto__;
// // tag =name1.toUpperCase();
// // tag =name1.charAt(0)
// // tag = out.indexOf('n')
// // tag = out.substring(1,8)
// // tag = out.slice(2,10)
// // tag = out.trim()
// // tag = out.replace('name',"mic")
// tag = out.split(' ')


// console.log(name1)
// console.log(tag,typeof tag);


// /*CHALLENGE FROM COURSE*/
//  const myString ="developer";
//  o =myString.charAt(0).toUpperCase() + myString.slice(1,9);

// //  second option
//  o =`${myString[0].toUpperCase()}${myString.substring(1,9)}`;

//  console.log(o); 

//     const num= new Number(50.9880);

//     // x=num.toFixed(2).length;
//     x=num.toPrecision(3);
//     x=Number.MIN_VALUE;
//     x=Number.MAX_VALUE;
// console.log(x,typeof x)

// math job
// x=Math.sqrt(4);
// x=Math.round(34.8)
// x=Math.ceil(34.8)
// // x=Math.floor(34.8)
// x=Math.pow(5,2)
// x=Math.min(2,4,5 )
// x=Math.max(2,4,5 )
// x=Math.floor(1+Math.random() *10);
// console.log(x)


// // ?challenge 
// let x =Math.floor(Math.random()*100);
// let y = Math.floor((Math.random()*100)/2)
// sum = x+y;
// mult = x*y;
// div = x/y;
// rem = x%y;
// console.log(x,y,sum,div,rem,mult)

// let d =new Date();
/* DATE "YYYY-MM-DD"*/
// DATE YYYY,MM,DD   HERE MM will be 0-11  

// let d= new Date("2023-11-14");
let e= new Date('2023/10/12');
// let d=e.getDate();
let d=e.getMonth()+1;
console.log(d,typeof d)


