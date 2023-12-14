const password = document.querySelector('#pwd');
const pwdLabel = document.querySelector('#pwd~.placeholder');
const pwdErr = document.querySelector('#pwd~.placeholder~.input-icon~.err-msg');
const pwdIcon = document.querySelector('#pwd~.placeholder~.input-icon');
const email = document.querySelector('#email');
const emailLabel = document.querySelector('#email~.placeholder');
const emailErr = document.querySelector('#email~.placeholder~.input-icon~.err-msg');
const emailIcon = document.querySelector('#email~.placeholder~.input-icon');
const userName = document.querySelector('#uname');
const uLabel = document.querySelector('#uname~.placeholder');
const uErr = document.querySelector('#uname~.placeholder~.input-icon~.err-msg');
const uIcon = document.querySelector('#uname~.placeholder~.input-icon');
const submit = document.querySelector('#submit');

let validPwd = false;
let validUname = false;
let validEmail = false;

validButton();

function validButton(){
    if(validEmail!==true || validPwd!==true || validUname!==true){
        submit.disabled = true;
        submit.classList.add('disabled');
    }else{
        submit.disabled = false;
        submit.classList.remove('disabled');
    }
}

password.addEventListener('change', (event)=> {
    validatePassword(event.target.value);
})

email.addEventListener('change', (event)  => {
    validateEmail(event.target.value);
})

userName.addEventListener('change', (event)=>{
    validateUserName(event.target.value);
})

function validatePassword(value){
    if(value.length < 8){
        password.classList.add('error');
        pwdLabel.classList.add('error');
        pwdErr.classList.add('active');
        if(value.length === 0){
            pwdErr.innerText = 'Please enter a password';
        }else{
            pwdErr.innerText = 'Password must be minimum 8 characters';
        }
        pwdIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 10 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ff0000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>';
        pwdIcon.classList.add('animation');
        setTimeout(()=>{
            pwdIcon.classList.remove('animation');
        },1000);
        validPwd = false;
    } else{
        password.classList.remove('error');
        pwdLabel.classList.remove('error');
        pwdErr.classList.remove('active');
        pwdIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#02d425" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>';
        pwdIcon.classList.add('animation');
        setTimeout(()=>{
            pwdIcon.classList.remove('animation');
        },1000);
        validPwd = true;
    }
    validButton();
}

function validateEmail(value){
    let regEx = /[a-zA-Z0-9]+@[a-z]+\.[a-z]+/g;
    validEmail = regEx.test(value);
    if(validEmail === false){
        email.classList.add('error');
        emailLabel.classList.add('error');
        emailErr.classList.add('active');
        if(value.length === 0){
            emailErr.innerText = 'Please enter the email';
        }else{
            emailErr.innerText = 'Please enter a valid email address';
        }
        emailIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ff0000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>';
        emailIcon.classList.add('animation');
        setTimeout(()=>{
            emailIcon.classList.remove('animation');
        },1000);
    }else{
        email.classList.remove('error');
        emailLabel.classList.remove('error');
        emailErr.classList.remove('active');
        emailIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#02d425" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>';
        emailIcon.classList.add('animation');
        setTimeout(()=>{
            emailIcon.classList.remove('animation');
        },1000);
    }
    validButton();
}

function validateUserName(value){
    if(value.length === 0){
        userName.classList.add('error');
        uLabel.classList.add('error');
        uErr.classList.add('active');
        uErr.innerText = 'Please enter the username';
        uIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 10 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ff0000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>';
        uIcon.classList.add('animation');
        setTimeout(()=>{
            uIcon.classList.remove('animation');
        },1000);
        validUname = false;
    }else{
        userName.classList.remove('error');
        uLabel.classList.remove('error');
        uErr.classList.remove('active');
        uIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#02d425" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>';
        uIcon.classList.add('animation');
        setTimeout(()=>{
            uIcon.classList.remove('animation');
        },1000);
        validUname = true;
    }
    validButton();
}



// tick mark
/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#00cc03" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> */

// cross
/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ff0512" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */