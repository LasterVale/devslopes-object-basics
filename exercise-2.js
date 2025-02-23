/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

// step 1 & 2
function grabCategories(obj) {
  return Object.keys(obj);
}

// step 3 & 4
console.log(grabCategories(papaJohns));
console.log(grabCategories(papaJohns.pizzaToppings));

// step 5
function verifyValues(obj, num) {
  if (!(Object.values(obj).length === num)) {
    return false;
  } else {
    return true;
  }
}

// function verifyValues(obj, targetCount) {
//   return Object.keys(obj).length === targetCount;
// }

// step 6
console.log(verifyValues(papaJohns, 9));

// trial
papaJohns.cool = true;
console.log(verifyValues(papaJohns, 10));

// step 7
function getToppingsInfo(obj) {
  return Object.entries(obj);
}
console.log(getToppingsInfo(papaJohns.pizzaToppings));

// step 8

papaJohns.printAd = function(topping) {
  return `Welcome to Papa John's! We are located at 555 Main Street. This week, we are having a sale on ${topping} for ${papaJohns.pizzaToppings[topping]}. Better Ingredients. Better Pizza. Papa John's.`;
}
console.log(papaJohns.printAd('bacon'));