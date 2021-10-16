const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = (array) => {

//   return tutorials
// }

// function titleCased(array){
//   let newArray = array.split(tutorials);
//   return newArray
// }

// console.log(titleCased(tutorials))

// // str.split(' ')
// //    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
// //    .join(' ')

// name[0].toUpperCase

// for(let word of words){
//   return word[0].toUppercase;
// }

// for(let item of array){
  
// }
// // slice(i)

// const titleCased = function(array){
  
// }




// function uppercaseWords (array){
//     let newArray = array.split(" ");
//     // let tempArray = [];
//     for (let element of newArray){
//       let capWord = element.charAt(0).toUpperCase() + element.slice(1);
//       newArray.push(capWord);
//       console.log(newArray)
//       // return tempArray;
//     }
//     newArray.join(" ")
//     console.log(tempArray);
//     // return tempArray;
//   }


const stupidVariable = tutorials.map(uppercaseWords)

const titleCased = () => stupidVariable;
 
function uppercaseWords (array){
  let newArray = array.split(" ");
  for (let i = 0; i < newArray.length; i ++ ){
    newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
  }
  return newArray.join(" ")
}

console.log(titleCased())





