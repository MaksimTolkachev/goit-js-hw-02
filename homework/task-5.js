// const checkForSpam = function (str) { 
// const arrStr = str.split(' ');
// for (let i = 0; i < arrStr.length; i += 1) { 
//     const word = arrStr[i].toLowerCase;
//     if (arrStr[i].toLowerCase === 'spam' || arrStr[i].toLowerCase === 'sale') {
//     return true;
//     }
// }
// return false;
// };



const checkForSpam = function (str) {
    const arr = str.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
    if (word == 'spam' || word == 'sale' || word == '[spam]') {
        return true;
    }
}
    return false;
}
    
console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));