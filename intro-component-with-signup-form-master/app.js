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
        document.getElementById('firstNameErr').classList.add('display-inline');
        document.getElementById('firstNameErrIcon').classList.add('error-icon');
    }

    if(!lastName) {
        lastNameElement.classList.add('error');
        document.getElementById('lastNameErr').classList.add('display-inline');
        document.getElementById('lastNameErrIcon').classList.add('error-icon');
    }

    if(!email) {
        emailElement.classList.add('error');
        document.getElementById('emailErr').classList.add('display-inline');
        document.getElementById('emailErrIcon').classList.add('error-icon');
    }

    if(!password) {
        passwordElement.classList.add('error');
        document.getElementById('passwordErr').classList.add('display-inline');
        document.getElementById('passwordErrIcon').classList.add('error-icon');
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
        document.getElementById('firstNameErrIcon').classList.remove('error-icon');
    }
};

const lastNameEventHandler = () => {
    if (lastNameElement.value && lastNameElement.classList.contains('error')) {
        lastNameElement.classList.remove('error');
        document.getElementById('lastNameErr').classList.remove('display-inline');
        document.getElementById('lastNameErrIcon').classList.remove('error-icon');
    }
};

const emailEventHandler = () => {
    if (emailElement.value && emailElement.classList.contains('error')) {
        emailElement.classList.remove('error');
        document.getElementById('emailErr').classList.remove('display-inline');
        document.getElementById('emailErrIcon').classList.remove('error-icon');
    }
};

const passwordEventHandler = () => {
    if (passwordElement.value && passwordElement.classList.contains('error')) {
        passwordElement.classList.remove('error');
        document.getElementById('passwordErr').classList.remove('display-inline');
        document.getElementById('passwordErrIcon').classList.remove('error-icon');
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