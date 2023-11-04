//declare
var num = [10,  87, 14, 42, 75, 41, 85, 62, 18]
// var student=['ram', 'gopal', 'hari']

//find length of array (size)
var l = num.length
var even=0
var odd=0
//access
for(var i=0;i<l;i++){
    var r = num[i]%2
    if(r==0){
        even++;
    }
    else{
        odd++
    }
}
document.write(`Total Even number = ${even} <br>`)
document.write(`Total ODD number = ${odd}`)

