import postComment from './addCommentAPI.js';
import getComment from './getCommentAPI.js';
import commentCounter from './commentCounter.js';

const createPopup = (object) => {
  const popupContainer = document.createElement('div');
  popupContainer.setAttribute('class', 'popupCard');
  const body = document.getElementById('main-container');
  body.appendChild(popupContainer);

  const leftSide = document.createElement('div');
  leftSide.classList.add('left-side');
  popupContainer.appendChild(leftSide);

  const popupPoke = document.createElement('div');
  popupPoke.classList.add('popupPoke');
  leftSide.appendChild(popupPoke);

  const name = document.createElement('h3');
  name.setAttribute('class', 'name');
  name.textContent = object.name;
  popupPoke.appendChild(name);

  const id = document.createElement('p');
  id.classList.add('id');
  popupPoke.appendChild(id);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('picDiv');
  const pokemonImage = document.createElement('img');
  pokemonImage.setAttribute('src', object.sprites.front_default);
  pokemonImage.setAttribute('alt', 'pokemon image');
  imgContainer.appendChild(pokemonImage);
  popupPoke.appendChild(imgContainer);

  const intro = document.createElement('div');
  intro.classList.add('intro');
  popupPoke.appendChild(intro);
  const info = document.createElement('p');
  info.classList.add('info');
  info.textContent = `Type: 
  Height: ${object.height}
  weight: ${object.weight}
  `;
  intro.appendChild(info);

  const commentSection = document.createElement('div');
  commentSection.classList.add('comment-section');
  popupContainer.appendChild(commentSection);

  const commentHeader = document.createElement('div');
  commentHeader.setAttribute('id', 'comment-header');
  commentSection.appendChild(commentHeader);

  const commentTitle = document.createElement('h3');
  commentTitle.textContent = 'COMMENTS';
  commentHeader.appendChild(commentTitle);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';
  closeBtn.setAttribute('id', 'close-btn');
  commentHeader.appendChild(closeBtn);

  const commentArea = document.createElement('div');
  commentArea.setAttribute('id', 'comment-area');
  commentSection.appendChild(commentArea);

  const newComments = document.createElement('div');
  newComments.classList.add('new-comments');
  commentSection.appendChild(newComments);

  const addComments = document.createElement('h3');
  addComments.textContent = 'Add a comment';
  newComments.appendChild(addComments);

  const input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('placeholder', 'your name');
  newComments.appendChild(input1);

  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('placeholder', 'your insigths');
  newComments.appendChild(input2);

  const bottom = document.createElement('div');
  bottom.classList.add('bottom-div');
  newComments.appendChild(bottom)

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submit-button');
  submitBtn.textContent = 'Submit';
  bottom.appendChild(submitBtn);
  
  closeBtn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  });
  
  const displayComments = async () => {
    const recentComments = await getComment(object.id);
    await recentComments.reverse();
    recentComments.forEach((comment) => {
      const newComment = document.createElement('div');
      newComment.classList.add('new-comment');
      newComment.innerHTML = `<p class="input-date">${comment.creation_date}</p><p class="comment-name">${comment.username}</p><p class="comment-msg">${comment.comment}</p>`;
      commentArea.appendChild(newComment);
    });
    /*  const counter = document.querySelectorAll('.new-comment').length;
    const counterText = document.createElement('p');
    counterText.setAttribute('id', 'counter');
    counterText.textContent = `Total comments: ${counter}`;
    bottom.appendChild(counterText); */
    const newComment1 = document.querySelectorAll('.new-comment');
    commentCounter(newComment1, bottom);
  };
  

  displayComments();
  
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    commentArea.innerHTML = '';
    await postComment(object.id, input1.value, input2.value);
    await displayComments();
    input1.value = '';
    input2.value = '';
  });
};

const reservationPopup = (name) => {
  const link = 'https://pokeapi.co/api/v2/pokemon/';
  const newLink = link + name;
  const pokemonObject = async () => {
    await fetch(newLink)
      .then((response) => response.json())
      .then((json) => createPopup(json));
  };
  pokemonObject();
};

window.onload = () => {
  const btn = document.querySelectorAll('.comment');
  btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const name = e.target.parentElement.parentElement.children[0].children[0].innerHTML;
      reservationPopup(name);
    });
  });
};
