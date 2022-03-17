const pokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

function sorteiaNumeroPokemon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function listaNumeroPokemon() {
    const arrayNumerosPokemon = [];
    for (i = 0; i < 5; i++) {
        arrayNumerosPokemon.push(sorteiaNumeroPokemon(1, 151));
    }
    return arrayNumerosPokemon;
}

console.log(listaNumeroPokemon());

function sorteiaRaridade(min, max) {
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    let raridade = '';
    if (numeroSorteado == 1) {
        raridade = 'lendario';
    } else if (numeroSorteado > 1 && numeroSorteado <= 11) {
        raridade = 'epico';
    } else if (numeroSorteado > 11 && numeroSorteado <= 42) {
        raridade = 'raro';
    } else raridade = 'normal';
    return raridade;
}

console.log(sorteiaRaridade(1, 100));

function listaRaridadePokemon() {
    const arrayRaridadePokemon = [];
    for (i = 0; i < 5; i++) {
        arrayRaridadePokemon.push(sorteiaRaridade(1, 100));
    }
    return arrayRaridadePokemon;
}

console.log(listaRaridadePokemon());

function listaPokemons() {
    const numeroPokemon = listaNumeroPokemon();
    const nomePokemon = [];
    for (i = 0; i < 5; i++) {
        nomePokemon.push(fetch(pokemonUrl(numeroPokemon[i])).then(response => response.json()).then(pokemon => { return pokemon.name }));
    }
    return nomePokemon;
}

console.log(listaPokemons());