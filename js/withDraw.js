document.getElementById('btn-withdraw').addEventListener('click',function( ){
    const withdrawGiven = getFieldName('withdrawFeild');
    const prevtotalWithdraw = getElementByText('totalWithdraw');

  
    if (isNaN(withdrawGiven)) {
        alert('pls type a number');
      return;  
    }
  
    const totalWithdrawNew = prevtotalWithdraw + withdrawGiven;  
    const balanceEle = getElementByText('balanceEle');  

    if (withdrawGiven>balanceEle) {
        alert('taka nai etw');
        return;
    }

   
    setText('totalWithdraw',totalWithdrawNew);
    
    
    const totalbalance = balanceEle - withdrawGiven;

    setText('balanceEle',totalbalance);

})