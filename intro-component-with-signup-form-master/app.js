const claimBtn = document.getElementById('claimBtn');
const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');

let errors = {
    firstName: false,
    lastName: false,
    email: false,
    password: false
};

claimBtn.addEventListener('click', () => {

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const email = emailElement.value;
    const password = passwordElement.value;

    if(!firstName) {
        firstNameElement.classList.add('error');
        const errorEle = document.getElementById('firstNameErr');
        errorEle.classList.add('display-inline');
    }

    if(!lastName) {
        lastNameElement.classList.add('error');
        const errorEle = document.getElementById('lastNameErr');
        errorEle.classList.add('display-inline');
    }

    if(!email) {
        emailElement.classList.add('error');
        const errorEle = document.getElementById('emailErr');
        errorEle.classList.add('display-inline');
    }

    if(!password) {
        passwordElement.classList.add('error');
        const errorEle = document.getElementById('passwordErr');
        errorEle.classList.add('display-inline');
    }

    if (firstName && lastName && email && password ) {
        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        passwordElement.value = '';
        alert('Your free trial started....');
    }
    
});

const firstNameEventHandler = () => {
    if (firstNameElement.value && firstNameElement.classList.contains('error')) {
        firstNameElement.classList.remove('error');
        document.getElementById('firstNameErr').classList.remove('display-inline');
    }
};

const lastNameEventHandler = () => {
    if (lastNameElement.value && lastNameElement.classList.contains('error')) {
        lastNameElement.classList.remove('error');
        document.getElementById('lastNameErr').classList.remove('display-inline');
    }
};

const emailEventHandler = () => {
    if (emailElement.value && emailElement.classList.contains('error')) {
        emailElement.classList.remove('error');
        document.getElementById('emailErr').classList.remove('display-inline');
    }
};

const passwordEventHandler = () => {
    if (passwordElement.value && passwordElement.classList.contains('error')) {
        passwordElement.classList.remove('error');
        document.getElementById('passwordErr').classList.remove('display-inline');
    }
};

firstNameElement.addEventListener('keyup', firstNameEventHandler);
firstNameElement.addEventListener('blur', firstNameEventHandler);

lastNameElement.addEventListener('keyup', lastNameEventHandler);
lastNameElement.addEventListener('blur', lastNameEventHandler);

emailElement.addEventListener('keyup', emailEventHandler);
emailElement.addEventListener('blur', emailEventHandler);

passwordElement.addEventListener('keyup', passwordEventHandler);
passwordElement.addEventListener('blur', passwordEventHandler);