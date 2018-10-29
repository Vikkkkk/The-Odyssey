let character = {
  name: `None`,
  health: `None`,
  race: `None`,
  damage: `None`,
  inventory: []
  // damage: function() {
  //   this.health += getRandomInt(10, 20);
  //   console.log(this.health);
  //}
};

const momster = {
  health: 10
};

const jim = {
  health: 10
};

function dealDamage(who, damage) {
  who.health -= damage;
}

dealDamage(momster, getRandomInt(10, 20));
// console.log(momster.health);

// character.damage();
// character.damage();
// character.damage();

// console.log(character);

// console.log(-Math.random() * 10);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomInt(10, 20));

// function charDamage() {
//   Math.floor(Math.random() * 10, 20);
//   return;
// }

// console.log(charDamage());
