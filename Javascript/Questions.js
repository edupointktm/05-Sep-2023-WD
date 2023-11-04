var num = [43, 23, 45, 65, 12, 34, 67, 3]
var l = num.length
var largest=0
var smallest = num[0]
for(var i=0;i<l;i++){

   if(num[i] < smallest){
        smallest = num[i]
   }

   if(num[i]>largest){
        largest=num[i]
   }

}

console.log("Smallest number is = "+smallest)
console.log("Largest number is = "+largest)