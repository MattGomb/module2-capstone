import liked from './likesCounter.js';

const codex = document.querySelector('#main-container');

const newLikes = (item) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/')
    .then((response) => response.json())
    .then((json) => {
      const pokeLikes = json;

      for (let i = 0; i < pokeLikes.length; i += 1) {
        if (pokeLikes[i].item_id === item) {
          const pokeConst = `likes${item}`;
          const pokeNumber = document.getElementById(pokeConst);
          pokeNumber.textContent = pokeLikes[i].likes;
        }
      }
    })
    .catch((err) => console.log(err));
};

const retrieve = (item) => {
  const card = document.createElement('div'); // Card Div
  card.setAttribute('class', 'PokeCard');
  codex.appendChild(card);

  const pokeName = document.createElement('h3'); // Card Tittle
  pokeName.classList.add('name');
  pokeName.innerText = item.name;
  card.appendChild(pokeName);

  const picDiv = document.createElement('div');
  picDiv.setAttribute('class', 'picDiv');
  card.appendChild(picDiv);

  const picture = document.createElement('img');
  picture.setAttribute('src', item.sprites.front_default);
  picDiv.appendChild(picture);

  const intro = document.createElement('div');
  intro.classList.add('intro');
  card.appendChild(intro);

  const type = document.createElement('p');
  type.innerHTML = `Type: ${item.types[0].type.name}`;
  intro.appendChild(type);

  const height = document.createElement('p');
  height.innerHTML = `Height: ${item.height} '`;
  intro.appendChild(height);

  const weight = document.createElement('p');
  weight.innerHTML = `weight: ${item.weight} lbs`;
  intro.appendChild(weight);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  card.appendChild(buttonsDiv);
  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment');
  commentBtn.innerText = 'Comments';
  const reserveBtn = document.createElement('button');
  reserveBtn.innerText = 'Reserve';
  reserveBtn.classList.add('reserve');
  buttonsDiv.appendChild(commentBtn);
  buttonsDiv.appendChild(reserveBtn);

  const likeButton = document.createElement('button');
  likeButton.setAttribute('id', item.name);
  likeButton.innerHTML = 'Like!';
  card.appendChild(likeButton);

  const likesNumber = document.createElement('p');
  likesNumber.setAttribute('id', `likes${item.name}`);
  likesNumber.innerHTML = 0;
  card.appendChild(likesNumber);

  liked(item.name);
  newLikes(item.name);
};

for (let i = 1; i < 152; i += 1) {
  const link = 'https://pokeapi.co/api/v2/pokemon/';
  const finalLink = link + i;
  const myFunction = async () => {
    await fetch(finalLink)
      .then((response) => response.json())
      .then((json) => retrieve(json))
      .catch((err) => console.log(err));
  };
  myFunction();
}

/*
    const myFunction = async () => {
        await fetch('https://pokeapi.co/api/v2/pokemon/1/')
       .then((response) => response.json())
       .then((json) => console.log(json))
       .catch((err) => console.log(err));
       }
       myFunction()
       */
