function checkCashRegister(price, cash, cid) {
  let change = {status: '', change: []};
  let cashUnit = {'PENNY':0.01, 'NICKEL': 0.05, 'DIME': 0.1, 'QUARTER': 0.5, 'ONE': 1, 'FIVE': 5, 'TEN': 10, 'TWENTY': 20, 'ONE HUNDRED': 100 };
  let balance = cash-price;
  let paraUstu = 0;
  let degisim = JSON.parse(JSON.stringify(cid));
	for(let i=degisim.length-1; i >= 0; i--){
		//console.debug("---",cid[i][1], cashUnit[cid[i][0]]);
  		if(degisim[i][1] > 0 && (degisim[i][1] >= cashUnit[degisim[i][0]])){
  			if(cashUnit[degisim[i][0]] <= balance){
  				while(balance-cashUnit[degisim[i][0]]>=0 && degisim[i][1]>0){
  					balance = balance-(cashUnit[degisim[i][0]]).toFixed(2);
  					degisim[i][1]=degisim[i][1].toFixed(2)-(cashUnit[degisim[i][0]]).toFixed(2);
  					balance = balance.toFixed(2);
  					console.log('=='+balance + '---'+ cashUnit[degisim[i][0]]+' var olan : '+ degisim[i]);
  				}
  				if(degisim[i][1] !== cid[i][1]){
  					change.change.push([cid[i][0], Number((cid[i][1]-degisim[i][1]).toFixed(2))]);
  				}
  			}
  		}
  }

  console.debug(change);
 if (Number(balance)!==0){
  		change.status='INSUFFICIENT_FUNDS';
  		change.change=[];
 	} else if(degisim.filter( x => x[1]).every(a => a=== 0 )){
     change.status = 'CLOSED';
     change.change = [...cid];
  } else {
     change.status = 'OPEN';
  }

  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
