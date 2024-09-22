const loginButton=document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const reciveMoney=document.getElementById('add-money').value;
    const pinNumber=document.getElementById('pin-number').value;
    if(pinNumber=='1111'){
        const balance=document.getElementById('availble-balance').innerText;
       const balanceNumber=parseFloat(balance);
       const addBalance=parseFloat(reciveMoney);
    //    Addition add money//
    const newBalance=balanceNumber+addBalance;
    //balance add to display show///>>>>
    document.getElementById('availble-balance').innerText=newBalance;
    }
    else{
        alert('Wrong your phone number and password');
    }
});