
function messageLength(message){
  //I know, this looks weird
  //it has to do with the way emojis have a string length of two
  //but the iterator only iterates them once so... yeah
  let total = 0;
  for(let word of message){
    for(let char of word) total+=1;
  }
  return total;
}

exports.frequency = function(message){
  let result = {};
  for(let word of message){
    for (let character of word) {
      if (result[character]) {
        result[character]++;
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
};


exports.probabilities = function(message){
  let result = {};
  let frequency = this.frequency(message);
  const totalChars = messageLength(message);

  for(let char of Object.keys(frequency)){ 
    if(frequency[char]){
      const prob = (frequency[char] / totalChars)
      result[char] = prob;
    }
  }

  return result;
}

exports.surprise = function(message){
  let result = {};
  let probability = this.probabilities(message);
  const chars = Object.keys(probability);

  for(let char of chars){
    if(probability[char]){
      result[char] = Math.log2(1/probability[char])
    }
  }
  return result;
}


exports.entropy = function(message){
  const surprises = Object.values(this.surprise(message));
  const charCount = messageLength(message);
  const totalSurprise =  surprises.reduce((total, s) => {
    return total + s
  },0);
  return totalSurprise/charCount;
}



