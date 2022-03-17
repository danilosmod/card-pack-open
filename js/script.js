const pokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;


function rafflePokemonNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pokemonNumberList() {
    const arrayNumerosPokemon = [];
    for (i = 0; i < 5; i++) {
        arrayNumerosPokemon.push(rafflePokemonNumber(1, 151));
    }
    return arrayNumerosPokemon;
}

console.log(pokemonNumberList());

function defineRarity(min, max) {
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    let rarity = '';
    if (numeroSorteado == 1) {
        rarity = 'lendario';
    } else if (numeroSorteado > 1 && numeroSorteado <= 11) {
        rarity = 'epico';
    } else if (numeroSorteado > 11 && numeroSorteado <= 42) {
        rarity = 'raro';
    } else rarity = 'normal';
    return rarity;
}

console.log(defineRarity(1, 100));

function pokemonRarityList() {
    const pokemonRarityArray = [];
    for (i = 0; i < 5; i++) {
        pokemonRarityArray.push(defineRarity(1, 100));
    }
    return pokemonRarityArray;
}

console.log(pokemonRarityList());

function pokemonList() {
    const pokemonNumber = pokemonNumberList();
    const pokemonName = [];
    for (i = 0; i < 5; i++) {
        pokemonName.push(fetch(pokemonUrl(pokemonNumber[i])).then(response => response.json()).then(pokemon => { return pokemon.name }));
    }
    return pokemonName;
}

console.log(pokemonList());

function createCards() {
    const cards = pokemonList();
    const rarity = pokemonRarityList();
    Promise.all(cartas).then((values) => {
        for (i = 0; i < values.length; i++) {
            const container = document.getElementById('cards-container');
            container.innerHTML += `
           <div class="card ${rarity[i]} card-tilt">
            <p class="rarity-text">${rarity[i]}</P>
            <img class="card-image" src=${values[i].sprites.other.dream_world.front_default}" />
            <h2 class="number">Nº ${values[i].id}</h2>
            <h1>${values[i].name}</h1>
            <p>Type: ${values[i].types[0].type.name}</p>
           </div>
           `
        }
    })
}