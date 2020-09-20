const players = ['Kalin', 'Bubi']
let characters = ['Ursula', 'Maleficent', 'Hook', 'Jafar', 'Prince John', 'Queen of Hearts', 'Ratigan', 'Scar', 'Yzma']

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

players.forEach(player => {
  const character = characters[getRandomArbitrary(0, characters.length)];
  characters = characters.filter(c => c !==  character);
  console.log(`${player} have to play with ${character}`);
})
