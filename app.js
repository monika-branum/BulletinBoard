/* Imports */
import { fetchPosts } from './fetch-utils.js';
fetchPosts();

/* Get DOM Elements */
const cardCont = document.getElementById('cards-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    await displayPosts();
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
