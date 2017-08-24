function FirstReverse(str) { 
    let newStr = "";
    for (let i =  str.length -1; i >= 0; i--) {
        newStr += str[i];
    }
    
  return newStr; 
         
}
   
// keep this function call here 
FirstReverse('Hey there');