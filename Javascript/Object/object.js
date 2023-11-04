// var student = ['ram','ganesh', 'gopal']

// student[0]
// var student = {key:value, key:value, key:value}


var student=[ 
    {
        names:"Ram Sah", 
        add:"janakpur", 
        mobile:"9845245",
        photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    }, 
    {
        names:"Gopal", 
        add:"Kathamdu", 
        mobile:"55875511",
        photo:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
    }, 
    {
        names:"Harih", 
        add:"Pokhara", 
        mobile:"458755",
        photo:"https://media.istockphoto.com/id/1475804411/photo/smiling-young-hispanic-self-employed-woman-standing-in-studio-with-laptop-in-hand.webp?b=1&s=170667a&w=0&k=20&c=cbSYfWGXvrTd2UYL-0brIMa0cKIy69GeapUoJLAA_o0="
    },
    {
        names:"Gopal Dhakal", 
        add:"Janakpur", 
        mobile:"Naresh",
        photo:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
    } 
] 
var l = student.length
document.write(`<table >`)
document.write(`<tr style=background-color:yellow> <th width=250px>Name </th><th width=250px>Address </th><th width=250px>Mobile </th> <th>Photo</th></tr>`)
for(var i=0;i<l;i++){
document.write(`<tr style=background-color:pink> <td>${student[i].names}</td> <td> ${student[i].add}</td> <td>${student[i].mobile}</td> <td><img src = ${student[i].photo} width=25% style="border-radius: 50%"></td> </tr>` )
}
document.write(`</table`)




