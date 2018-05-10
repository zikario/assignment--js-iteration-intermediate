/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 *
**/

function findLongestWord (str){
  var top = 0;
  var topstr = " ";
  var arry = str.split("'");
  var arryx = [];
  var narry = [];
  for (var i = 0; i< arry.length; i++){
    var arryz = arry[i].split(" ")
    arryx.push(arryz)
  }
  for (var i = 0; i < arryx.length; ++i) {
    for (var j = 0; j < arryx[i].length; ++j)
      narry.push(arryx[i][j]);
  }
  for(var i = 0; i < narry.length; i++){
    if(narry[i].length > top){
      top =  narry[i].length;
      topstr = narry[i];
    }
  }
  return topstr;
}

console.group('JS Iterations Week');
  console.log('%cFunction: findLongestWord', 'background-color: green; color: white')
  console.groupCollapsed('Should return "baskets" from "I have baskets full of lemons"');
    console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
  console.groupEnd();

  console.groupCollapsed('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
    console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
  console.groupEnd();

  console.groupCollapsed('Should return "Texas" from "don’t mess with Texas"');
    console.assert(findLongestWord("don't mess with Texas") === 'Texas')
  console.groupEnd();

  console.groupCollapsed('Should return "time" from "a time to act."');
    console.assert(findLongestWord('a time to act.') === 'time')
  console.groupEnd();
console.groupEnd();
