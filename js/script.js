function sorteiaNumeroPokemon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function criaArrayNumeroPokemon() {
    const arrayNumerosPokemon = [];
    for (i = 0; i < 5; i++) {
        arrayNumerosPokemon.push(sorteiaNumeroPokemon(1, 151));
    }
    return arrayNumerosPokemon;
}

console.log(criaArrayNumeroPokemon());

function sorteiaRaridade(min, max) {
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    let raridade = '';
    if (numeroSorteado >= 1 && numeroSorteado <= 25) {
        raridade = 'lendario';
    } else if (numeroSorteado > 25 && numeroSorteado < 50) {
        raridade = 'normal';
    } else if (numeroSorteado >= 50 && numeroSorteado < 75) {
        raridade = 'raro';
    } else raridade = 'epico';
    return raridade;
}

console.log(sorteiaRaridade(1, 100));

function criaArrayRaridadePokemon() {
    const arrayRaridadePokemon = [];
    for (i = 0; i < 5; i++) {
        arrayRaridadePokemon.push(sorteiaRaridade(1, 100));
    }
    return arrayRaridadePokemon;
}

console.log(criaArrayRaridadePokemon());