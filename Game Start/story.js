function TheGame() {
  let gamestart = confirm("Are You ready to enter the dungeon?");
  if (gamestart == 1) {
    character.name = prompt("what is your name?");
    character.race = prompt("Are you a Vampire or Werewolf?", "Vampire");
  }
  if (character.race.toLowerCase() == "vampire") {
    Vampireroute();
  } else if (character.race.toLowerCase() == "werewolf") {
    Werewolfroute();
  } else {
    alert("invalid race!! Now your kicked out of the game!");
  }
}

function DamageScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Vampireroute() {
  character.health = 50;
  character.damage = DamageScore(10, 20);
  console.log(character);
  let encounterOne = prompt(
    "You walk in and encounter an adorable monster. Do you Feed it or Bite it?"
  );
  if (encounterOne.toLowerCase() == "feed") {
    alert(
      "It Bites your hand(-10hp) and because of your dirty blood the monster dies"
    );
    character.health -= 10;
    console.log(character);
  } else if (encounterOne == "bite") {
    alert("The monster is now your slave companion!");
    character.inventory.push("minimonster");
    console.log(character);
  }

  let encounterTwo = prompt(
    "Now you see a ladder, Where do you want to go next? Up or Down? "
  );
  if (encounterTwo == "up") {
    alert(
      "AHA! the ladder broke and you fell down! losing 10 hp. and now you see a MOMSTER!"
    );
    character.health -= 10;

    checkInventory();
  } else if (encounterTwo == "down") {
    alert("BOOOM!! Now you see a MOMSTER!");
    checkInventory();
  }

  if (checkHealth(character.health, character.name)) {
    return;
  }

  let encounterThree = prompt(
    "Now you have defeated the MOMSTER, you keep going down the dungeon, Suddenly you see two doors one red and one blue which one do you choose?"
  );
  if (encounterThree == "red") {
    alert(
      `Its Ben!! and he says:"It is dangerous out there, take this!" you acquire a cup of yerba mate and get fully healed`
    );
    character.health = 50;
  } else if (encounterThree == "blue") {
    SidEncounter();
  }

  let encounterFour = prompt(
    "You continue down the corridor and encountered a cat-shaped door with a cat poster on it. The poster is really cute so you decide to steal it. Do you want to enter the door? (yes or no)"
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
} //end of vamp route

function JimEncounter() {
  let Jim = prompt(
    `"Jimothy the BASS GOD!" appears and he slaps you with a sick bass rift. Do you attack or use the cat poster? (please enter attack or poster)`
  );
  if (Jim == "attack") {
    fightJim();
  } else if (Jim == "poster") {
    alert(
      "OMG it's supereffective! Jimothy is now stunned by the cuteness and doesn't want to fight you anymore!"
    );
    alert("You BEAT THE GAME!!");
  }
}

function SidEncounter() {
  let sidAnswer = prompt(
    `Its Sid! he seems to be meditating and then he asks you:"Is egg vegetarian?" (please answer yes or no)`
  );
  if (sidAnswer == "yes") {
    alert(
      "Sid summons the Japanese Spiderman and he gives you a sushi roll to eat which grants you 20 HP"
    );
    character.health += 20;
  } else if (sidAnswer == "no") {
    alert("Things get awkward and you lose 10 HP");
    character.health -= 10;
  }
}

function Werewolfroute() {
  character.health = 65;
  character.damage = DamageScore(5, 15);
  console.log(character);
  let encounterOne = prompt(
    "You walk in and encounter an adorable monster. Do you Feed it or Bite it?"
  );
  if (encounterOne.toLowerCase() == "feed") {
    alert(
      "The minister tries to bite you but you avoid it and roar. It now respects you and follows you around."
    );
    character.inventory.push("minimonster");
    console.log(character);
  } else if (encounterOne == "bite") {
    alert("You killed it");
    console.log(character);
  }

  let encounterTwo = prompt(
    "Now you see a ladder, Where do you want to go next? Up or Down? "
  );
  if (encounterTwo == "up") {
    alert(
      "AHA! the ladder broke and you fell down! losing 10 hp. and now you see a MOMSTER!"
    );
    character.health -= 10;

    checkInventory();
  } else if (encounterTwo == "down") {
    alert("BOOOM!! Now you see a MOMSTER!");
    checkInventory();
  }

  if (checkHealth(character.health, character.name)) {
    return;
  }

  let encounterThree = prompt(
    "Now you have defeated the MOMSTER, you keep going down the dungeon, Suddenly you see two doors one red and one blue which one do you choose?"
  );
  if (encounterThree == "red") {
    alert(
      `Its Ben!! and he says:"It is dangerous out there, take this!" you acquire a cup of yerba mate and get fully healed`
    );
    character.health = 65;
  } else if (encounterThree == "blue") {
    SidEncounter();
  }

  let encounterFour = prompt(
    "You continue down the corridor and encountered a cat-shaped door with a cat poster on it. The poster is really cute so you decide to steal it. Do you want to enter the door? (yes or no)"
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
}

function checkInventory() {
  if (character.inventory.length == 1) {
    alert(
      "The MOMSTER saw your companion and chills with it so you can sneak by"
    );
  } else {
    alert("The MOMSTER wants to rip you apart, Time to Fight!!");
    // console.log(fightMom());
    fightMom();
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
    alert("you get your ass kicked");
  } else if (monsterhp <= 0) {
    alert("you killed the momster");
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
  alert(player + " dead");
}
