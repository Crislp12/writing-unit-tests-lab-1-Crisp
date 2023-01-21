// Question 1
const isUpperCase = (str) => {
return str === str.toUpperCase()
};

// Question 2
const removeVowels = (strArr) => {
return strArr.map(word=> word.replace(/[aeiou]/gi,""))
};

// Question 3
const wordCap = (str) => {
return (str.split(" ").map(element => element[0].toUpperCase() + element.slice(1, element.length).toLowerCase()).join(" "))
};

// Question 4
const swapCase = (str) => {
  const newStr = []

  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      newStr[i] = str[i].toLowerCase() 
    } else if(str[i] === str[i].toLowerCase()){
      newStr[i] = str[i].toUpperCase()
    }
  }
  return newStr.join("")
};

// Question 5
const staggeredCase = (str) => {
let key = true
let newStr = ""
for(let i = 0; i < str.length; i++){

  if(str[i].match(/[a-z]/gi)){

  if(key){
    key = false 
    newStr+=str[i].toUpperCase()
  }else{
    key = true
    newStr+=str[i].toLowerCase()
  }

  }
  else{
    newStr+=str[i]
  }
}
return newStr
};

// Question 6
const wordLengths = (str) => {
if(str === "" || str === undefined) return []
str = str.split(" ")
const array = []

for(let i = 0; i < str.length; i++){
let size = str[i].length

array.push(`${str[i]} ${size}`)

}

return array
};

// Question 7
const searchWord = (word, str) => {
 let count = 0
  let tex = str.replaceAll(",","")
  let text = tex.split(" ")

  for (let i = 0; i < text.length; i++){

    if (text[i].toLowerCase() == word ){
      count++
    }

  } 
return count 
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
