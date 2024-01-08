const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    const loginData = {
        email,
        password,
    }
    if (email && password) {
        console.log(loginData);
        event.target.reset();
    } else {
        alert('All form fields must be filled in')
    }   
}

form.addEventListener('submit', onFormSubmit);
