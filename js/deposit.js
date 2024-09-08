document.getElementById('btn-deposite').addEventListener('click',function( ) {
    const inputDepositeFieldGiven =  getFieldName('deposite-felid');
    const previousTotalDepo = getElementByText('total-depo');

    if (isNaN(inputDepositeFieldGiven)) {
        alert('pls type a number');
      return;  
    }
  
    const totalDepo = previousTotalDepo + inputDepositeFieldGiven;

    setText('total-depo',totalDepo);

    
    const balanceEleprev = getElementByText('balanceEle');
    const Totalbalance =  balanceEleprev + inputDepositeFieldGiven;

    setText('balanceEle',Totalbalance);

})