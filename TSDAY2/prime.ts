var count:number=0, n:number=2,i:number;
var flag:boolean = true;
while(count < 10){

    for(i=2;i<n-1;i++){
        if(n%i == 0)
        {
            flag=false;
            break;
        }
    }
    if(flag==true){
        console.log(n);
        count++;
    }
    flag=true;
    n++;
}
