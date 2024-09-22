const loginButton=document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    if(phoneNumber=='0101' && pinNumber=='1111'){
        console.log('You are logged');
        alert('are sure log in.');
        window.location.href='./index.html';
    }
    else{
        alert('Wrong your phone number and password');
    }
});