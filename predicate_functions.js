var conservativeSpender = function(balance)  {
  return balance > 100;
};

var liberalSpender = function(balance) {
  return balance > 10;
};

var horribleSaver = function(balance) {
  return balance > 0;
};

var yourSpendingStrategy = function(balance) {
 return balance > 60;
};


var shouldIBuyThis = function(balance, strategy) {
  if ( strategy(balance) ) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
};



function smarterShouldIBuyThis(cost, balance, strategy) {
  var futureBalance = balance - cost;
   if ( strategy(futureBalance) ) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
};



// USE CASES ARE HERE. STOP SCROLLING! STOOOPPPPPPP.
// OK, now read on!
//
if (!module.parent) {
  // Uncomment each use case and get it working before moving to the next.
  // You will know the code works because the word "true" will appear when
  // you run `node introducing_predicate_functions.js`

  // We're going to use a callback to decide whether we want to buy an item or
  // not, based on our account balance. This kind of callback function (one
  // which returns true or false) is known as a "predicate" function.

  // Find, uncomment and implement the `shouldIBuyThis` function above, then
  // uncomment and implement each of the following use cases one by one.

  // console.log(shouldIBuyThis(20, conservativeSpender) === "Nope! Gotta keep my savings up!");
  // console.log(shouldIBuyThis(20, liberalSpender) ===  "Sure! I've got the money!");
  // console.log(shouldIBuyThis(1, horribleSaver) === "Sure! I've got the money!");

  // Find, uncomment, and implement the `smarterShouldIBuyThis` function above,
  // then uncomment the following use cases
  console.log(smarterShouldIBuyThis(50, 45, horribleSaver) === "Nope! Gotta keep my savings up!");

  // Can you define your own spending strategy?
  // Scroll up to yourSpendingStrategy above
  console.log(smarterShouldIBuyThis(100, 41, yourSpendingStrategy) === "Nope! Gotta keep my savings up!");


  // Like all callbacks, we may define a predicate function as an anonymous
  // function (i.e. without storing it in a variable):
  console.log(shouldIBuyThis(999, function(balance) {
    return balance > 1000;
  }) === "Nope! Gotta keep my savings up!");

}
