const tel_input = document.querySelector('input#phone');

// auto add hyphens to phone-number
tel_input.addEventListener('keyup',(event) => {
    if (event.key != 'Backspace' && (tel_input.value.length==3 || tel_input.value.length==7)) {
        if (tel_input.value[tel_input.value.length-1] != '-') {
            tel_input.value+='-';
        }
    }
})

// prevent user from adding hyphens
tel_input.addEventListener('keypress',(event) => {
    if (!'1234567890'.includes(event.key)) {
        event.preventDefault();
    }
})