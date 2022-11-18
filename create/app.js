import { checkAuth, createNewPost } from '../fetch-utils.js';
import { logOut } from '../fetch-utils.js';

const formEl = document.getElementById('form-create');
const logOutBtn = document.getElementById('logout-btn');

checkAuth();

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    const response = await createNewPost(newPost);
    window.location = '../index.html';
});

logOutBtn.addEventListener('click', () => {
    logOut();
});
