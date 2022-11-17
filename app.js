/* Imports */
import { fetchPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

/* Get DOM Elements */
const cardCont = document.getElementById('cards-container');
const createBtn = document.getElementById('create-btn');
/* State */

/* Events */
window.addEventListener('load', async () => {
    await displayPosts();
});

createBtn.addEventListener('click', () => {
    window.location = '/create';
});

/* Display Functions */
async function displayPosts() {
    const posts = await fetchPosts();
    for (let post of posts) {
        const postEl = renderPosts(post);
        cardCont.append(postEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
