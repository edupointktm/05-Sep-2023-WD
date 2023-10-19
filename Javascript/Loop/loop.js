
// console.log("Ram")
// for
// while
// do while
// for each

// syntax

// for( init;cond;update){



// }
//WAP to ask any one number and display multiplication table of given number
// let n=prompt("Enter any one number")
// for(let i=1;i<=10; i++){

//     document.write(`${n} x   ${i} = ${i*n} <br> `)
// }
// let c=1

// for(let i=1;i<=4;i++){

//      c=(c*10)+1
//     document.write(`${c} <br>`)
// }

// for(let i=1;i<=10;i++){
//     let r=i%2
//     if(r==0){
//         document.write(i+"<br>")
//     }
// }

// for (let i = 1; i <= 15; i++) {

//     document.write(i + "<br>")

// }

// syntax
// while(cond){


// }
// let i = 1;
// do {

//     document.write(i + "<br>")
//     i++
// }
// while (i <= 5)


// break
// continue

// for (let i = 1; i <= 5; i++) {

//     if (i >= 3) {
//         console.log(i)
//         break;
//     }
    
// }

// for(let i=1;i<=5;i++){

//     if(i>=3){
//         continue
//         console.log(i)
//     }
    

// }


var n=4;
var f=0;
for(let i=2;i<n;i++){
    var r= n%i
    if(r==0){
        f=1
        break
    }
}
if(f==0){
    console.log("prime")
}
else{
    console.log("composite")
}

// Array

