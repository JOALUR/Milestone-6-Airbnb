function filterByCity(targetCity, listingCityArray) {
  // define array to keep track of indices
  let cities = [];

  //loop through listingCityArray
  for (let i = 0; i < listingCityArray.length; i++) {
    //compare cities, ignoring case
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      //if they match, add index to indices array
      cities.push(i);
    }
  }
  //return array of matching indices
  return cities;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  //We recommend using a for loop to loop over each element in listingPriceArray.
  let prices = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    // Compare each item with minPrice and maxPrice.
    // If an element is less than maxPrice and more than minPrice,
    if (listingPriceArray[i] < maxPrice && listingPriceArray[i] > minPrice) {
      // you can add its index to a new array to hold on to it.
      prices.push(i);
    }
  }
  // Finally, you can return the array from the function once the loop is finished.
  return prices;
  // Note: Comment out the following line when you start working on this function!
  // return [...listingPriceArray.keys()];
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  let target = [];
  //outer loop iterating through listingTypeArray
  for (let i = 0; i < listingTypeArray.length; i++) {
    //inner loop iterating thorugh targetTypes for each item in listingTypeArray
    for (let j = 0; j < targetTypes.length; j++) {
      //if item in listingTypeArray matches item in targetTypes the index i is added to target array
      if (listingTypeArray[i] === targetTypes[j]) {
        target.push(i);
      }
    }
  }
  //returns target array after nested loop
  return target;

  // Note: Comment out the following line when you attempt the LevelUp!
  // return [...listingTypeArray.keys()];
}
