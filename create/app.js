import { createNewPost } from '../fetch-utils.js';

const formEl = document.getElementById('form-create');

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
