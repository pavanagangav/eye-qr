//post increment
// var x=4
// console.log(x++)

//pre increment
// var x=10
// console.log(++x)

//post decrement
// var x=4
// console.log(x--)

//pre decrement
// var x=10
// console.log(--x)

//+
// var x="java"
// var y="point"
// console.log(x+y)

//-
// var x=5
// var y=6
// console.log(x-y)

//*
// var x=5
// var y=6
// console.log(x*y)

// /
// var x=5
// var y=6
// console.log(x/y)

// %
// var x=25
// var y=20
// console.log(x%y)

// =
// var x=5
// console.log(x)

// +=
// var x=10
// console.log(x+=5)

//-=
// var x=10
// console.log(x-=5)

//*=
// var x=10
// console.log(x*=5)

// /=
// var x=10
// console.log(x/=5)

// %
// var x=10
// console.log(x%=5)

//==
// var x=10
// var y=1
// console.log(x==y)

// !=
// var x=10
// var y=1
// console.log(x!=y)

//<=
// var x=10
// var y=1
// console.log(x<=y)

// >=
// var x=10
// var y=1
// console.log(x>=y)

//<
// var x=10
// var y=1
// console.log(x<y)

//>
// var x=10
// var y=1
// console.log(x>y)

//&
// var x=5
// var y=10
// console.log(x>y && y>=10)

// ||
// var x=5
// var y=10
// console.log(x>y || y>=10)

//!
// var x=4
// console.log(!x==4)

// ?
// var x=4
// var y=x%2==0 ? "even "+x:"odd "+y
// console.log(y)

//?
// var x=4
// var y=x%2==0 ? "login":"logout"
// console.log(y)

// var withdraw=30000
// var limit=200000
// var mainbal=10000
// if(limit<withdraw)
// {
//     console.log("not sucessful:limit error")
// }
// else if(mainbal<withdraw){
//     console.log("not sucessful:balance error")
// }
// else{
//     mainbal-=withdraw
//     console.log(mainbal)
// }

// var year=2002
// if(year%4==0){
//     console.log("leap year")
// }
// else{
//     console.log("not leap year")
// }

// for(var i=1;i<=10;i++){
//     console.log("Hello " +i)
//  }

// var i=1
// while(i<=10){
// if(i%2==0)
// console.log(i +" even")
// i++
// }

// var i=1
// do{
//     console.log(i+1)
//     i++
// }while(i<=10)

// for(var i=1;i<=3;i++){
//     console.log(i+" first")
//     for (var j=1;j<=3;j++){
//         console.log(j+" second")  
//     }
// }

// sum=0
// tab=9
// for(i=1;i<=10;i++){
//     sum=tab*i
//     console.log(tab+" * "+i+" = "+sum)
// }

// var sum=1
// for(i=1;i<=5;i++){
//     sum*=i
// }
// console.log(sum)

// for(; ;)
// {
//     console.log("infinity" )
// }


//<----------------------functions--------------------------------->
// <----------------------password--------------------------------->

function getPassword(){
    if(input.value===''){
document.getElementById('error').innerHTML="Enter password"
eye.className="fa-solid fa-eye-slash"
    }
    else if(input.type=='password'){
input.type="text"
eye.className="fa-solid fa-eye"
document.getElementById('error').innerHTML=""
    }else{
        input.type="password"
eye.className="fa-solid fa-eye-slash"
    }
}

// <----------------------QR Code--------------------------------->

function getQr(){
    image.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +inputVal.value
}