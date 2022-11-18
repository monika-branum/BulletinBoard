import { redirectIfLoggedIn, signUpUser } from '../fetch-utils.js';

const signInForm = document.getElementById('signin-form');
const signUpForm = document.getElementById('signup-form');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(email.value, password.value);
});

// signUpForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const data = new FormData(signUpForm);
//     const user = await signUpUser(data.get('email'), data.get('password'));
// });
