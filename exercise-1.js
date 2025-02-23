/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

// step 1 & 2
const fennecRest = {
  name: "Fennec Pizzeria",
  cuisines: "Pizza, Stromboli, Deep Dish",
  numberOfStars: 4.6,
  isFavored: false
};

// step 3
fennecRest.address = "6518 Arboretum Lane";
fennecRest.zipcode = 91356;
fennecRest.acceptsReservations = false;


// console.log(fennecRest.numberOfStars);
// console.log(fennecRest.isFavored);
// console.log(fennecRest.cuisines);


// step 4
fennecRest["numberOfStars"] = 4.7;
fennecRest["isFavored"] = true;
fennecRest["cuisines"] = "Pizza, Stromboli, Deep Dish, Thin Crust";


// console.log(fennecRest.numberOfStars);
// console.log(fennecRest.isFavored);
// console.log(fennecRest.cuisines);

// step 5
function retrieveProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
}

// step 6
console.log(retrieveProperty(fennecRest, 'cuisines'));
console.log(retrieveProperty(fennecRest, 'isFavored'));
console.log(retrieveProperty(fennecRest, 'name'));
console.log(retrieveProperty(fennecRest, 'nickName'));
console.log(retrieveProperty(fennecRest, 'state'));