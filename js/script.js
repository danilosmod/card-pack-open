const pokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
const boosterPack = document.getElementById('openPack');
const closeCardsButton = document.getElementById('closeCards');
closeCardsButton.hidden = true;
const packQuantity = document.getElementById('packInfo');
packQuantity.innerHTML = 5;

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

function pokemonRarityList() {
    const pokemonRarityArray = [];
    for (i = 0; i < 5; i++) {
        pokemonRarityArray.push(defineRarity(1, 100));
    }
    return pokemonRarityArray;
}

function pokemonList() {
    const pokemonNumber = pokemonNumberList();
    const pokemonName = [];
    for (i = 0; i < 5; i++) {
        pokemonName.push(fetch(pokemonUrl(pokemonNumber[i])).then(response => response.json()).then(pokemon => { return pokemon}));
    }
    return pokemonName;
}

function createCards() {
    const cards = pokemonList();
    const rarity = pokemonRarityList();
    Promise.all(cards).then((values) => {
        for (i = 0; i < values.length; i++) {
            let container = document.getElementById('cards-container');
            container.innerHTML += `
           <div class="card ${rarity[i]} card-tilt">
            <p class="rarity-text">${rarity[i]}</P>
            <img class="card-image" src= "${values[i].sprites.other.dream_world.front_default}" />
            <h2 class="number">Nº ${values[i].id}</h2>
            <h1>${values[i].name}</h1>
            <p>Type: ${values[i].types[0].type.name}</p>
           </div>
           `
        }
    })
}

function countPacks() {
    packQuantity.innerHTML = packQuantity.innerHTML - 1;
}

function noMoreCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML =  `
    <div class="modal">
    <h2>Tudo bem. Te esperamos na próxima!</h2>    
    </div>`;
}

function closeCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = ``;
    closeCardsButton.hidden = true;
    if (packQuantity.innerHTML == 0) {
        boosterPack.hidden = true;
        closeCardsButton.hidden = true;
        container.innerHTML = `
        <div class="modal">
        <h2>Você não tem mais pacotes!</h2>
        <p>Conseguir mais pacotes?</p>
        <span>
        <button class="yes" onclick="window.location.reload()">Sim</button>
        <button class="no" onclick="noMoreCards()">Não</button>
        </span>
        </div>`
    } else boosterPack.hidden = false;
}

function openBoosterPack() {
    countPacks();
    createCards();
    boosterPack.hidden = true;
    closeCardsButton.hidden = false;
}

boosterPack.addEventListener('click', openBoosterPack);
closeCardsButton.addEventListener('click', closeCards);