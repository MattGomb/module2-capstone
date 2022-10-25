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
	intro.classList.add('intro')
	card.appendChild(intro);

	const info = document.createElement('p');
	info.classList.add('info')
	info.innerText = 'this is just placeholder text';
	intro.appendChild(info);

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


const myFunction = async () => {
	let num = 0;
	while (num < 160){
	num ++;
	let newLink = 'https://pokeapi.co/api/v2/pokemon/' + num;
	await fetch(newLink)
   .then((response) => response.json())
   .then((json) => retrieve(json))
   .catch((err) => console.log(err));
   }
	}
	
   myFunction()
   

