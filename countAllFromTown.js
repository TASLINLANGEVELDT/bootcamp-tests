function countAllFromTown(regNumber,locTag){
  console.log(regNumber);
  var allFromTown = regNumber.split(", ");

 console.log(allFromTown);
  var numbs = [0];

  for(var i=0;i<allFromTown.length;i++){
    if(allFromTown[i].startsWith(locTag)){
     numbs.push(allFromTown[i]);
    }
  }
  return numbs.length;
}
