import './style.css';


const base = document.querySelector('#main-container');

const retrieve = (item) => {
    
    const card = document.createElement('div'); // Card Div
    card.setAttribute('class','PokeCard');
    
    base.appendChild(card);
    
    const pokeName = document.createElement('h3'); // Card Tittle
    pokeName.innerHTML = item.name;
    card.appendChild(pokeName);


    const picDiv = document.createElement('div');
    picDiv.setAttribute('class','picDiv');
    card.appendChild(picDiv);


    const picture = document.createElement('img');
    picture.setAttribute('src',item.sprites.front_default);
    picDiv.appendChild(picture)

  };

  
for(let i = 1; i<152;i++){


    const link = 'https://pokeapi.co/api/v2/pokemon/';
    const finalLink = link+i
    
    const myFunction = async () => {
        await fetch(finalLink)
       .then((response) => response.json())
       .then((json) => retrieve(json))
       .catch((err) => console.log(err));
       }
       myFunction()
    
    
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