const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validemail = false;
let validphone = false;
let validname = false;
$('#failure').hide();
$('#success').hide();
name.addEventListener('blur', () => {
    // validate for name here
    let regex = /^([a-zA-Z@_-\s]){2,20}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        name.classList.remove('is-invalid');
        validname = true;

    }
    else {
        console.log("no match");
        name.classList.add('is-invalid');
        validname = false;
    }
})


email.addEventListener('blur', () => {
    // validate for email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        email.classList.remove('is-invalid');
        validemail = true;

    }
    else {
        console.log("no match");
        email.classList.add('is-invalid');
        validemail = false;
    }
})


phone.addEventListener('blur', () => {
    // validate for phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        phone.classList.remove('is-invalid');
        validphone = true;

    }
    else {
        console.log("no match");
        phone.classList.add('is-invalid');
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validemail && validname && validphone) {
        let faliure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        // faliure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        let faliure = document.getElementById('failure');
        faliure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();

    }
})