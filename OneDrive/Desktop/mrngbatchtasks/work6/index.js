// 1.find the given number is palindrom


// let rev=str.split("").reverse().join("")


// if(str==rev){
//     console.log("palaindrom")
// }
// else{
//     console.log("Not a palindrom")
// }


// or

// let  str="malayalam";
//  let rev=""
// for(i=str.length-1;i>=0;i--){
   
//     rev+=str[i];

// }
//    console.log(rev)

//     if(str === rev){
//     console.log("palindrom")
// }
// else{
//     console.log("not a palindrom")
// }



// let Todo=[];
// while(true){
//     let input=prompt(`enter input value \n [1] add task \n [2] display task \n [5] exit`)
//     if(input=="1"){
//         let task=prompt("enter a word")
//         Todo.push(task)
        
//     }
//     else if(input=="2"){
//             str=``
//             for(let i=0;i<Todo.length;i++){
//                 str+=`[${i+1}] ${Todo[i]} \n`
//             }
//             alert(str)
//     }
//     else if(input=="5"){
//         break;
//     }
//     else("invalid ")

// }



// while(true){
//     let str = prompt("Enter a word (or type 'exit' to stop):");

//   if (str.toLowerCase() === "exit") {
//     break; 
//   }


//     let rev=str.split("").reverse().join("")

//     if(str==rev){
//     alert("palaindrom")
// }
// else{
//     alert("Not a palindrom")
// }

// }


// 2.count the Node.of vowels in a string 

// let str="malaylkamei"
// for ( let i=0;i<str.length;i++){
//     if(str[i]==="a"||str[i]==="A"||str[i]==="e"||str[i]==="E" || str[i]=="o" || str[i]==="O"||str[i]==="i"||str[i]==="I"||str[i]==="u"||str[i]==="U"){
//         console.log(str[i])
        
//     }
    
    
// }



// 3.find the lenght of a string without using string methods 
let str = "malayalam";
let count = 0;

for (let i = 0; str[i] !== undefined; i++) {
  count++;
}

console.log(count); 


