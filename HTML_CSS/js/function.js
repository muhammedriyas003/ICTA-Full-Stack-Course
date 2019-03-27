

var num1=523,num2=234;

k=add(num1,num2);
l=sub(num1,num2);
m=mul(num1,num2);
n=div(num1,num2);
console.log("dif is",l);
console.log("sum is",k);
console.log("product is",m);
console.log("qua is",n);

function add(x,y)
{

    z=x+y;
    return z;
}

function sub (x,y)
{
z=x-y;
return z;

}
function mul(x,y)
{

    z=x*y;
    return z;
}
function div(x,y)
{
z=x/y;
return z;

}