const formatString = function(string) {
  const lengthMax = 40;
  let reverseToString;
  let finalString;
  const arrString = string.split("");
  if (arrString.length <= lengthMax) {
    finalString = string;
    return string;
  } else arrString.length > lengthMax;
  reverseToString = arrString.slice(0, 40);
  finalString = reverseToString.join("") + " ... ";
  return finalString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
