const tel_input = document.querySelector('input#phone');
tel_input.addEventListener('keyup',(event) => {
    if (event.key != 'Backspace' && (tel_input.value.length==3 || tel_input.value.length==7)) {
        tel_input.value+='-';
    }
})