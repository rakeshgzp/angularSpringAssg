var count:number = 2, a:number=0,b:number=1,c:number;
console.log(a);
console.log(b);

while(count<10)
{
 c= a+ b;
 console.log(c);
 a=b;
 b=c;
 count ++;
}