function totalPhoneBill(totalBill){
 //console.log(string);
  var phoneBill = totalBill.split(", ");
  var bill=0;

   for(var i=0;i<phoneBill.length;i++){

     if(phoneBill[i]=="call"){
      bill+=2.75;}

     else if (phoneBill[i]=="sms"){
      bill+= 0.65;}
   }
      return "R"+bill.toFixed(2);
}
      
