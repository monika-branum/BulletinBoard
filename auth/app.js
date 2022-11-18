import { redirectIfLoggedIn, signUpUser, signInUser } from '../fetch-utils.js';

const signInForm = document.getElementById('signin-form');
const signUpForm = document.getElementById('signup-form');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('../create');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('../create');
    }
});
