function sorteiaNumeroPokemon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function criaArrayNumeroPokemon() {
    let arrayNumerosPokemon = [];
    for (i = 0; i < 5; i++) {
        arrayNumerosPokemon.push(sorteiaNumeroPokemon(1, 151));
    }
    return arrayNumerosPokemon;
}

