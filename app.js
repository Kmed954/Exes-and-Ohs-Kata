function XO(str) {
    let countX = 0;
    let countO = 0;
    
    let arrayOfChars = str.toLowerCase().split("");
    
    for (let i = 0; i < arrayOfChars.length; i++) {
      if (arrayOfChars[i] === 'x') {
        countX++;
      } else if (arrayOfChars[i] === 'o') {
        countO++;
      }
    }
    
    if (countX === countO) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(XO("ooxx")); // => true
  console.log(XO("xooxx")); // => false
  console.log(XO("ooxXm")); // => true
  console.log(XO("zpzpzpp")); // => true // when no 'x' and 'o' is present should return true
  console.log(XO("zzoo")); // => false
  
  