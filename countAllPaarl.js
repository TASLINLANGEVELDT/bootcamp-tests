function countAllPaarl(regNumbers){
  console.log(regNumbers);
   var paarlReg = regNumbers.split(", ");
  console.log(paarlReg);
  var paarl = [];

  for(var i=0;i<paarlReg.length;i++){
    if(paarlReg[i].startsWith('CJ')){
     paarl.push(paarlReg[i]);
    }
  }
    return paarl.length;
}
