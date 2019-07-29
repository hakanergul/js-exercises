function checkCashRegister(price, cash, cid) {
  let change = {status: '', change: []};
  let cashUnit = {'PENNY':0.01, 'NICKEL': 0.05, 'DIME': 0.1, 'QUARTER': 0.5, 'ONE': 1, 'FIVE': 5, 'TEN': 10, 'TWENTY': 20, 'ONE HUNDRED': 100 };
  let balance = cash-price;
  let paraUstu = 0;
  let degisim = cid;
	for(let i=degisim.length-1; i >= 0; i--){
		//console.debug("---",cid[i][1], cashUnit[cid[i][0]]);
  		if(degisim[i][1] > 0 && (degisim[i][1] >= cashUnit[degisim[i][0]])){
  			
  			if(cashUnit[degisim[i][0]] <= balance){
  				while(balance-cashUnit[degisim[i][0]]>=0 && cid[i][1]>0){
  					balance-= cashUnit[degisim[i][0]];
  					degisim[i][1]-=cashUnit[degisim[i][0]];
  					balance = balance.toFixed(3);
  					console.log('=='+balance + '---'+ cashUnit[degisim[i][0]]+' var olan : '+ degisim[i]);
  				}

  				if(degisim[i][1] === cid[i][1]){
  					console.log(cid[i][1])
  					change.change.push([cid[i][0], degisim[i][1]]);
  					console.log('sokkk');
  				}
  			}
  		}
  }

  console.debug(balance, cid);
 /* if (balance<0){

  		change.status='INSUFFICIENT_FUNDS';
  		change.change=[];
 	} else if (balance>0){
	  	change.status='OPEN';

	} else {
 		change.status='CLOSED';
  }
*/

  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));