const tel_input = document.querySelector('input#phone');

// auto add hyphens to phone-number
tel_input.addEventListener('keyup',(event) => {
    if (event.key != 'Backspace' && (tel_input.value.length==3 || tel_input.value.length==7)) {
        if (tel_input.value[tel_input.value.length-1] != '-') {
            tel_input.value+='-';
        }
    }
});

// prevent user from adding hyphens
tel_input.addEventListener('keypress',(event) => {
    if (!'1234567890'.includes(event.key)) {
        event.preventDefault();
    }
});

const submit = document.querySelector('button.create-account');
const password_message = document.querySelector('.passwords-do-not-match');

// check that passwords match

const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');

confirm_password.addEventListener('keyup', event => {
    if (password.value==confirm_password.value) {
        confirm_password.style.bordercolor = 'rgb(0,255,0)';
        confirm_password.style.outlineColor = 'rgb(0,255,0)';
        submit.disabled=false;
        password_message.style.visibility = 'hidden';
    } else {
        confirm_password.style.bordercolor = 'auto';
        confirm_password.style.outlineColor = 'white';
        submit.disabled=true;
        password_message.style.visibility = 'visible';
    }
});