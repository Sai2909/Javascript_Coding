var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (var i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) result = result - roman[s[i]];
    else result = result + roman[s[i]];
  }
  return result;
};

let s = "IV";
console.log(romanToInt(s));
