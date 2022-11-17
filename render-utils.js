export function renderPosts(post) {
    const cardDiv = document.createElement('div');
    const titleEl = document.createElement('h2');
    const descriptionEl = document.createElement('p');
    const contactEl = document.createElement('p');

    cardDiv.classList.add('card');
    titleEl.textContent = post.title;
    descriptionEl.textContent = post.description;
    contactEl.textContent = post.contact;

    cardDiv.append(titleEl, descriptionEl, contactEl);
    return cardDiv;
}
