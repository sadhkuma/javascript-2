//program for sum of two number
const rs=require('readline-sync');
const  n1=rs.question('input number 1:')
const  n2=rs.question('input number 2:')
console.log('sum is :',n1+n2);

//calculate the simple interest 
const p=100;
const r=6;
const t=2;
console.log('SI=',p*r*t/100)

//program to calculate kinetic energy of a body  with  mass m and volume 'v'
const m=25;
const v=5;
console.log('kineticEnergy :',0.5*m*v*v)

//4.program t0 convert fahrenheit to celcius
const temp=rs.question('enter temp :');
console.log('output is  :',(temp-32)*9/5);

//calculate area ,perimeter of a square .also calcilate surface area and the volume of a cube of s1

const a=rs.question('type  side ;');
console.log('Area is  :',a*a);
console.log('Perimeter is  :',4*a);
console.log('Surface Area  is  :',6*a*a);
console.log('Volume is  :',a*a*a);

//program t calculate the profit and loss

const CP=1500;
const SP=2000;
console.log('profit is  :',SP-CP);
const cp=3125;
const sp=1125;
console.log('loss is  :',cp-sp);

//programto calculate sum of N natural number as input by user

const userNumber=rs.question("input number");
let sum=0;
for(let i=1;i<=userNumber;i++)
  {
   sum+=i; 
  }
console.log('sum :',sum);
//program to print N odd Number in Decending order
const Num=4;
let a1;
for( i=Num-1;i>=0;i--)
  {
    a1=1+i*2;
    console.log(a1);
  }

//8.program to compute the sum of all digits that ocuurs in a given string


  



