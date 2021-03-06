function findMatching (list, name) {
    let findList = []
    for(let i=0; i<list.length; i++){
        if(list[i].toLowerCase() === name.toLowerCase()){
            findList.push(list[i]);
            }
        
        
    }
    return findList 
   // return list.filter(function (driverName) {
   //   return driverName.toLowerCase() === name.toLowerCase();
    // });

  }


  
  function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }
  
  function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }