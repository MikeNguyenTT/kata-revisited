const urlDecode = function(text) {
  // Put your solution here
  
  // Break argument into an array pairs
  const pairList = [];
  let lastPairIndex = 0;
  let textLeft = text;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "&") {
      pairList.push(text.slice(lastPairIndex, i))
      lastPairIndex = i;
      textLeft = text.slice(i + 1);
    }
    if (i === text.length - 1) {
      pairList.push(textLeft);
    }
  }
  return decodeIntoPair(pairList);

};

const decodeIntoPair = function(pairList) {
  const obj = {};
  for (const pairString of pairList) {
    for (let i = 0; i < pairString.length; i++) {
      if (pairString[i] === "=") {
        obj[pairString.slice(0, i)] = pairString.slice(i + 1).replace(/%20/g, " ");
        break;
      }
    }
  }
  return obj;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);