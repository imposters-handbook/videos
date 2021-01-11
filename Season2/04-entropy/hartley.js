//the idea here is to calculate the entropy for a given message
//it's in base 10

const H = (m) => {
  const possibleMessages = Math.pow(36,m.length);
  return Math.log(possibleMessages)
}

console.log(H("hello"));