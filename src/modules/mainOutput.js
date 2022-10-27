
const codex = document.querySelector('#main-container');

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
