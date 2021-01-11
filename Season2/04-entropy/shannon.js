
const lp = {
  E: .1202,
  T: .0910,
  A: .0812,
  O: .0768,
  I: .0731,
  N: .0695,
  S: .0628,
  R: .0602,
  H: .0592,
  D: .0432,
  L: .0398,
  U: .0288,
  C: .0271,
  M: .0261,
  F: .0230,
  Y: .0211,
  W: .0209,
  G: .0203,
  P: .0182,
  B: .0149,
  V: .0111,
  K: .0069,
  X: .0017,
  Q: .0011,
  J: .0010,
  Z: .0007
};

const surprise = (m) => {
  const chars = m.split('');
  const probs = chars.map(c => lp[c.toUpperCase()])
  console.log(probs);
  return probs.reduce((a,b) => a * b)
}

console.log(surprise("Hello"));