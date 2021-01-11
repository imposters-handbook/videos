

const frequency = function(message){
  let calc = {}, sorter = [], out = {};
  
  //calculate the counts using a hash for speed
  for(let word of message){
    for (let character of word) {
      calc[character] ? calc[character]++ : calc[character] = 1;
    }
  }
  //pop into an array so we can sort
  for (var char in calc) {
    sorter.push([char, calc[char]]);
  }
  //sort descending based on the value
  sorter.sort((a, b) => b[1] - a[1]);
  //reassemble into an object, convenience mostly
  sorter.forEach(item => out[item[0]]=item[1])
  return out;
};


//compensating for JS/Emoji string-length weirdness
const messageLength = function(message){
  let total = 0;
  for(let word of message){
    for(let char of word) total+=1;
  }
  return total;
}

const probabilities = function(message){
  let result = {}, counts = frequency(message), totalChars = messageLength(message);
  for(let char of Object.keys(counts)){ 
    const prob = (counts[char] / totalChars);
    result[char] = prob;
  }
  return result;
}


const surprises = function(message){
  let result = {}, probability = probabilities(message);
  const chars = Object.keys(probability);

  for(let char of chars){
    result[char] = Math.log2(1/probability[char])
  }
  return result;
}

const entropy = function(message){
  const surprise = Object.values(surprises(message));
  const charCount = messageLength(message);
  const totalSurprise =  surprise.reduce((total, s) => {
    return total + parseFloat(s)
  },0);
  return totalSurprise/charCount;
}

let message = "OMG!OMFG!! 🙄💩"
let primer = `It was the best of times it was the worst of times it was the age of wisdom it was the age of foolishness it was the epoch of belief it was the epoch of incredulity it was the season of Light it was the season of Darkness it was the spring of hope it was the winter of despair we had everything before us we had nothing before us we were all going direct to Heaven we were all going direct the other way in short the period was so far like the present period that some of its noisiest authorities insisted on its being received for good or for evil in the superlative degree of comparison only There were a king with a large jaw and a queen with a plain face on the throne of England there were a king with a large jaw and a queen with a fair face on the throne of France In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes that things in general were settled for ever It was the year of Our Lord one thousand seven hundred and seventyfive Spiritual revelations were conceded to England at that favoured period as at this Mrs Southcott had recently attained her fiveandtwentieth blessed birthday of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster Even the Cocklane ghost had been laid only a round dozen of years after rapping out its messages as the spirits of this very year last past supernaturally deficient in originality rapped out theirs Mere messages in the earthly order of events had lately come to the English Crown and People from a congress of British subjects in America which strange to relate have proved more important to the human race than any communications yet received through any of the chickens of the Cocklane brood France less favoured on the whole as to matters spiritual than her sister of the shield and trident rolled with exceeding smoothness down hill making paper money and spending it Under the guidance of her Christian pastors she entertained herself besides with such humane achievements as sentencing a youth to have his hands cut off his tongue torn out with pincers and his body burned alive because he had not kneeled down in the rain to do honour to a dirty procession of monks which passed within his view at a distance of some fifty or sixty yards It is likely enough that rooted in the woods of France and Norway there were growing trees when that sufferer was put to death already marked by the Woodman Fate to come down and be sawn into boards to make a certain movable framework with a sack and a knife in it terrible in history It is likely enough that in the rough outhouses of some tillers of the heavy lands adjacent to Paris there were sheltered from the weather that very day rude carts bespattered with rustic mire snuffed about by pigs and roosted in by poultry which the Farmer Death had already set apart to be his tumbrils of the Revolution But that Woodman and that Farmer though they work unceasingly work silently and no one heard them as they went about with muffled tread the rather forasmuch as to entertain any suspicion that they were awake was to be atheistical and traitorous In England there was scarcely an amount of order and protection to justify much national boasting Daring burglaries by armed men and highway robberies took place in the capital itself every night families were publicly cautioned not to go out of town without removing their furniture to upholsterers warehouses for security the highwayman in the dark was a City tradesman in the light and being recognised and challenged by his fellowtradesman whom he stopped in his character of the Captain gallantly shot him through the head and rode away the mail was waylaid by seven robbers and the guard shot three dead and then got shot dead himself by the other four in consequence of the failure of his ammunition after which the mail was robbed in peace that magnificent potentate the Lord Mayor of London was made to stand and deliver on Turnham Green by one highwayman who despoiled the illustrious creature in sight of all his retinue prisoners in London gaols fought battles with their turnkeys and the majesty of the law fired blunderbusses in among them loaded with rounds of shot and ball thieves snipped off diamond crosses from the necks of noble lords at Court drawingrooms musketeers went into St Giless to search for contraband goods and the mob fired on the musketeers and the musketeers fired on the mob and nobody thought any of these occurrences much out of the common way In the midst of them the hangman ever busy and ever worse than useless was in constant requisition now stringing up long rows of miscellaneous criminals now hanging a housebreaker on Saturday who had been taken on Tuesday now burning people in the hand at Newgate by the dozen and now burning pamphlets at the door of Westminster Hall today taking the life of an atrocious murderer and tomorrow of a wretched pilferer who had robbed a farmers boy of sixpence All these things and a thousand like them came to pass in and close upon the dear old year one thousand seven hundred and seventyfive Environed by them while the Woodman and the Farmer worked unheeded those two of the large jaws and those other two of the plain and the fair faces trod with stir enough and carried their divine rights with a high hand Thus did the year one thousand seven hundred and seventyfive conduct their Greatnesses and myriads of small creaturesthe creatures of this chronicle among the restalong the roads that lay before them`;

const probs = probabilities(message);
const sups = surprises(message)
const freq = frequency(message);
const ent = entropy(message);

// console.log(freq);
// console.log(probs);
// console.log(sups);
console.log(ent);

const primerFrequency = frequency(primer.toUpperCase());
//console.log(primerFrequency);

const Encoder = require("./encoder");
const encoder = new Encoder();
//console.log(encoder.encode(primer));

const checkMessage = `You want a toe? I can get you a toe, believe me. There are ways, Dude. You don't wanna know about it, believe me.`
const encoded = encoder.encode(checkMessage);

const errors = `010111011110011000001001010001100011000010000000110111101000110100000100000000110000010110101001100001011101111001100001000000011011110100010000010110001110110101011011010000101011010000011110010111100010000100111010100000100101000101111111000001011001100101101000010111011110011000001010111011000110000010010100011001100100000010110010110011100100100001101000000111100110011000110100110001000101011000111011010101101101000010101101`

const decoded = encoder.decode(errors);
//console.log(encoded);
console.log(decoded);