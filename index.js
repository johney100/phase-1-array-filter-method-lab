// Code your solution here
//findMatching- This function takes an array of drivers' names and a string as arguments,
// and returns the matching list of drivers. 
//The function should be case insensitive.


/*function findMatching(drivers, driver) {
    for (driver of drivers) {
        if(drivers.filter(driver)){
            return drivers.driver;

        }
   
  }
}

function findMatching(drivers, driver){

    const driverName = drivers.filter(driver);
    return driverName;
}


function findMatching(names, name) {
    const matchingDrivers = [];
  
    for (const driverName of names) {
      if (driverName.toLowerCase() === name.toLowerCase()) {
        matchingDrivers.push(driverName);
      }
    }
  
    return matchingDrivers;
  }
  */

  function findMatching(names, name) {

     return names.filter(function (driverName) {

      return driverName.toLowerCase() === name.toLowerCase();
    });
  }

  //This function takes an array of drivers' names and a string as arguments 
  //for querying the array, and returns all drivers 
  //whose names begin with the provided letters.

  
  function fuzzyMatch(stringArray, letter) {
    const filteredArray = [];
   
    stringArray.filter(function(name) {
      if(name.substring(0, 2) === letter) {
        filteredArray.push(name);
      }
     // return filteredArray;
     
    });
    return filteredArray;
  }

  
  /*function matchName(array, string) {
    const newArray = [];
   
    array.filter(function(name) {
      if(array.name === string) {
        newArray.push(name);
      }
     // return filteredArray;
     
    });
    return newArray;
  }


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
 */
  function matchName(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.name === name;
    });
  }