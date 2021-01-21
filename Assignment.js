// kilometerToMeter--------------------------
function kilometerToMeter(kilometer) {
    return kilometer*1000;
}
var Meter = kilometerToMeter(5);
console.log(Meter);


//budgetCalculator----------------------------
function budgetCalculator( watch , phone , laptop ) {
    return (watch*50)+(phone*100)+(laptop*500);
}
var Budget = budgetCalculator(1,1,1);
console.log(Budget);



// hotelCost--------------------------------
function hotelCost(days) { 
    return (10*100)+((days-10)*80);
}
var cost=hotelCost(20);
console.log(cost);


//megaFriend--------------------------------
function megaFriend(friendsarray) {
    var max = friendsarray[0].length;
    friendsarray.map(v => max = Math.max(max, v.length));
    
    return friendsarray.filter(v => v.length == max) ;
  }

console.log(megaFriend(['Raz', 'Rakib', 'Rigan','Sadek','Sheikh']));
