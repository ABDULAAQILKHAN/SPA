


    username = document.getElementById('name');
    email = document.getElementById('email');
    address = document.getElementById('address');
    number = document.getElementById('number');

    name_err = document.getElementById('name_err');
    email_err = document.getElementById('email_err');
    address_err = document.getElementById('address_err');
    number_err = document.getElementById('number_err');


username.addEventListener('blur',  ()=>{
    if (username.value == ''){
        name_err.innerHTML = '*username cannot be blank*';
        username.style.border = '1px solid red';
       
    
    }
    else{
        name_err.innerHTML = '';
        username.style.border = '0px solid red';

       
    }
}  );
email.addEventListener('blur',  ()=>{
    if (email.value == ''){
        email_err.innerHTML = '*username cannot be blank*';
        email.style.border = '1px solid red';
       
    
    }
    else{
        email_err.innerHTML = '';
        email.style.border = '0px solid red';

       
    }
}  );
address.addEventListener('blur',  ()=>{
    if (address.value == ''){
        address_err.innerHTML = '*username cannot be blank*';
        address.style.border = '1px solid red';

    }
    else{
        address_err.innerHTML = '';
        address.style.border = '0px solid red';
       }
}  );
number.addEventListener('blur',  ()=>{
    if (number.value == ''){
        number_err.innerHTML = '*username cannot be blank*';
        number.style.border = '1px solid red';
       
    
    }
    else{
        number_err.innerHTML = '';
        number.style.border = '0px solid red';

       
    }
}  );


/*if (username.value == '' || email.value == '' || address.value == '' || number.value == ''){

    document.getElementById('btn').addEventListener('click', (event)=>{
        event.preventDefault();
        alert('event');
    })


}*/