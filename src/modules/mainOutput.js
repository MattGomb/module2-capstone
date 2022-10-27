const codex = document.querySelector('#main-container');

const retrieve = (item) => {
  const card = document.createElement('div'); // Card Div
  card.setAttribute('class', 'PokeCard');
  codex.appendChild(card);

  const header = document.createElement('div');
  header.classList.add('header');
  card.appendChild(header);

  const pokeName = document.createElement('h3'); // Card Tittle
  pokeName.classList.add('name');
  pokeName.innerText = item.name;
  header.appendChild(pokeName);

  const pokeID = document.createElement('p');
  pokeID.classList.add('id');
  pokeID.innerText = `${item.id}`;
  header.appendChild(pokeID);

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
  type.innerHTML = item.types.length === 2 ? `Type: ${item.types[0].type.name}, ${item.types[1].type.name}` : `Type: ${item.types[0].type.name}`;
  intro.appendChild(type);

  const height = document.createElement('p');
  height.innerHTML = `Height: ${item.height} '`;
  intro.appendChild(height);

  const weight = document.createElement('p');
  weight.innerHTML = `Weight: ${item.weight} lbs`;
  intro.appendChild(weight);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  card.appendChild(buttonsDiv);

  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment');
  commentBtn.setAttribute('type', 'button');
  commentBtn.innerText = 'Comments';

  const reserveBtn = document.createElement('button');
  reserveBtn.innerText = 'Reserve';
  reserveBtn.classList.add('reserve');
  reserveBtn.setAttribute('type', 'button');
  buttonsDiv.appendChild(commentBtn);
  buttonsDiv.appendChild(reserveBtn);
};

for (let i = 1; i < 152; i += 1) {
  const link = 'https://pokeapi.co/api/v2/pokemon/';
  const finalLink = link + i;
  const myFunction = async () => {
    await fetch(finalLink)
      .then((response) => response.json())
      .then((json) => retrieve(json));
  };
  myFunction();
}
