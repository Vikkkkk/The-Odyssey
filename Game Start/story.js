function TheGame() {
  let gamestart = confirm("Are you ready to enter the dungeon?");
  if (gamestart == 1) {
    character.name = prompt("What is your name?");
    alert("Hi " + character.name.toUpperCase() + "!");
    character.race = prompt("Are you a Vampire or Werewolf?");
  }
  if (character.race.toLowerCase() == "vampire") {
    Vampireroute();
  } else if (character.race.toLowerCase() == "werewolf") {
    Werewolfroute();
  } else {
    alert("Invalid race!! Now your kicked out of the game!");
  }
}

function DamageScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Vampire Route
function Vampireroute() {
  character.health = 55;
  character.damage = DamageScore(15, 20);
  alert(`Your starting health is ${character.health} HP.`);
  console.log(character);
  let encounterOne = prompt(
    "You walk in and encounter an adorable monster. Do you Feed it or Bite it?"
  );
  if (encounterOne.toLowerCase() == "feed") {
    character.health -= 5;
    alert(
      `It Bites your hand (-5hp). Your filthy blood kills the baby monster. Current health: ${
        character.health
      } HP.`
    );
    console.log(character);
  } else if (encounterOne == "bite") {
    alert("The baby monster is now your slave companion!");
    character.inventory.push("minimonster");
    console.log(character);
  }

  let encounterTwo = prompt(
    "You see a ladder. Where do you want to go next: Up or Down? "
  );
  if (encounterTwo.toLowerCase() == "up") {
    character.health -= 10;
    alert(
      `AHA! The ladder broke and you fell down! losing 10 hp. You encounter the MOMster! Health: ${
        character.health
      } HP.`
    );

    checkInventory();
  } else if (encounterTwo.toLowerCase() == "down") {
    alert("BOOOM!! You encounter the MOMster!");
    checkInventory();
  }

  if (checkHealth(character.health, character.name)) {
    return;
  }

  const encounterThree = prompt(
    "You come upon two doors: red and blue. Which door do you choose?"
  );
  if (encounterThree == "red") {
    character.health = 55;
    alert(
      `Its Ben!! and he says: "It's dangerous out there, take this!" You acquire a cup of yerba mate. You drink it and get fully healed. Health: ${
        character.health
      } HP.`
    );
    console.log(`character health: ${character.health}`);
  } else if (encounterThree == "blue") {
    SidEncounter();
  } else {
    encounterThree;
  }

  function SidEncounter() {
    let sidAnswer = prompt(
      `Its Sid! He seems to be meditating and asks you: "Are eggs vegetarian?" (answer yes or no)`
    );
    if (sidAnswer == "yes") {
      character.health += 20;
      alert(
        `Sid summons the Japanese Spiderman and he gives you a sushi roll to eat and gain 20 HP. Health: ${
          character.health
        } HP.`
      );
    } else if (sidAnswer == "no") {
      character.health -= 10;
      alert(
        `Things get awkward and you lose 10 HP. (Health: ${
          character.health
        } HP)`
      );
      console.log(character.health);
    }
  }

  let encounterFour = prompt(
    "You continue down the corridor and encountered a door with a cat poster on it. The poster is really cute so you steal it. Do you enter the door: yes or no?"
  );
  if (encounterFour == "yes") {
    JimEncounter();
    if (checkHealth(character.health, character.name)) {
      return;
    }
  } else if (encounterFour == "no") {
    alert("You are stuck in a limbo!");
    character.health -= 100;
    if (checkHealth(character.health, character.name)) {
      return;
    }
  }
} //end of vamp route

function JimEncounter() {
  let Jim = prompt(
    `"Jimothy the BASS GOD!" appears and he slaps you with a sick bass rift (-10 HP). Do you attack or use the cat poster? (please enter attack or poster)`
  );
  character.health -= 10;
  console.log("character health: " + character.health);
  if (Jim.toLowerCase() == "attack") {
    fightJim();
  } else if (Jim == "poster") {
    alert(
      "OMG it's supereffective! Jimothy is now stunned by the cuteness and doesn't want to fight you anymore!"
    );
    alert(`${character.name.toUpperCase()}! You BEAT THE GAME!!`);
    document.write(
      `<h3>Jimothy falls. You successfully escape the dungeon. Mac appears and hands you a celebratory joint.</h2> <p><img src="https://i.chzbgr.com/full/9138501120/h03560ADC/" alt="victory cat"></p>`
    );
  }
}

function SidEncounter() {
  let sidAnswer = prompt(
    `Its Sid! He seems to be meditating and asks you: "Are eggs vegetarian?" (answer yes or no)`
  );
  if (sidAnswer == "yes") {
    character.health += 20;
    alert(
      `Sid summons the Japanese Spiderman and he gives you a sushi roll to eat. You gain 20 HP. Health: ${
        character.health
      } HP.`
    );
  } else if (sidAnswer == "no") {
    character.health -= 10;
    alert(
      `Things get awkward and you lose 10 HP. Health: ${character.health} HP.`
    );
    console.log(character.health);
  }
}

// Werewolf
function Werewolfroute() {
  console.log("wolf");
  character.health = 65;
  character.damage = DamageScore(8, 15);
  alert(`Your starting health is ${character.health}.`);
  console.log(character);
  let encounterOne = prompt(
    "You walk in and encounter an adorable monster. Do you Feed it or Bite it?"
  );
  if (encounterOne.toLowerCase() == "feed") {
    alert(
      "The baby monster tries to bite you, but you manage to avoid it and let out a ferocious roar! The baby is hypnotize and becomes your slave companion."
    );
    character.inventory.push("minimonster");
    console.log(character);
  } else if (encounterOne.toLowerCase() == "bite") {
    alert("You kill the baby monster and proceed to the next room.");
    console.log(character);
  }

  let encounterTwo = prompt(
    "You see a ladder. Where do you want to go next: Up or Down? "
  );
  if (encounterTwo.toLowerCase() == "up") {
    character.health -= 10;
    alert(
      `AHA! The ladder broke and you fell down and lost 10 hp. Current health: ${
        character.health
      } HP`
    );
    alert("You encounter the MOMster!");
    console.log(character.health);
    character.health -= 10;
    checkInventory();
  } else if (encounterTwo.toLowerCase() == "down") {
    alert("BOOOM!! You encounter the MOMster!");
    checkInventory();
    console.log(character.health);
  }

  function checkInventory() {
    if (character.inventory.length == 1) {
      alert(
        "MOMster sees the baby monster with you. As the baby reunites with it's mom, you sneak on by."
      );
    } else {
      alert("The MOMSTER wants to rip you apart. Time to Fight!!");
      // console.log(fightMom());
      fightMom();
    }
    return;
  }

  if (checkHealth(character.health, character.name)) {
    return;
  }

  let encounterThree = prompt(
    "You come upon two doors: red and blue. Which do you choose?"
  );
  if (encounterThree == "red") {
    character.health = 65;
    alert(
      `Its Ben!! He says: "It is dangerous out there, take this!" you acquire a cup of yerba mate and get fully healed. Current health: ${
        character.health
      }`
    );
  } else if (encounterThree == "blue") {
    SidEncounter();
  }
  function SidEncounter() {
    let sidAnswer = prompt(
      `Its Sid! He seems to be meditating and then he asks you: "Is egg vegetarian?" (answer yes or no)`
    );
    if (sidAnswer == "yes") {
      alert(
        "Sid summons the Japanese Spiderman and he gives you a sushi roll to eat. +20 HP"
      );
      character.health += 20;
    } else if (sidAnswer == "no") {
      character.health -= 10;
      alert(
        `Things get awkward and you lose 10 HP. health: ${character.health} HP.`
      );

      console.log(character.health);
    }
  }
  let encounterFour = prompt(
    "You continue down the corridor and encountere a door with a cat poster on it. The poster is really cute so you steal it. Do you want to enter the door: yes or no?"
  );
  if (encounterFour == "yes") {
    JimEncounter();
    if (checkHealth(character.health, character.name)) {
      return;
    }
  } else if (encounterFour == "no") {
    alert("you are stuck in a limbo!");
    character.health -= 100;
    if (checkHealth(character.health, character.name)) {
      return;
    }
  }
} //end of werewolf route

// new
function checkInventory() {
  if (character.inventory.length == 1) {
    alert(
      "MOMster sees her baby monster with you. As the baby reunites with it's mom, you sneak by."
    );
  } else {
    alert("The MOMSTER wants to rip you apart, Time to Fight!!");
    // console.log(fightMom());
    fightMom();
    console.log("character health " + character.health);
  }
  return;
}

function fightMom() {
  let monsterhp = 50;
  let monsterdamage = DamageScore(5, 10);
  while (character.health >= 0 && monsterhp >= 0) {
    character.health -= monsterdamage;
    monsterhp -= character.damage;
    console.log("character health " + character.health);
    console.log("monster health " + monsterhp);
  }
  if (character.health <= 0) {
    alert("You get your ass kicked");
  } else if (monsterhp <= 0) {
    alert("you killed the Momster");
    console.log("character health " + character.health);
  }
  return;
}

function fightJim() {
  console.log("hihi");
  let jimHp = 70;
  let jimDamage = DamageScore(10, 20);
  while (character.health >= 0 && jimHp >= 0) {
    character.health -= jimDamage;
    jimHp -= character.damage;
    console.log("character health " + character.health);
    console.log("Jimothy's health " + jimHp);
  }
  if (character.health <= 0) {
    alert("you get your ass kicked");
  } else if (jimHp <= 0) {
    alert("you defeated Jimothy the BASS GOD");
    console.log("character health " + character.health);
    document.write(
      `<h3>Jimothy falls. You successfully escape the dungeon. Mac appears and hands you a celebratory joint.</h2> <p><img src="https://i.chzbgr.com/full/9138501120/h03560ADC/" alt="victory cat"></p>`
    );
  }
  return;
}

function checkHealth(health, player) {
  if (health <= 0) {
    death(player);
    return true;
  }
}

function death(player) {
  alert(player.toUpperCase() + " is now dead.");
  document.write(
    `<img src="https://memegenerator.net/img/instances/73839813/boom-i-win-you-lose.jpg" alt="lost">`
  );
}
