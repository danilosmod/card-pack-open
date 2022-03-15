function sorteiaNumeroPokemon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(sorteiaNumeroPokemon(1, 151));