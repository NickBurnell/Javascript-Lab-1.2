"use strict"; {
    let userName = "";
    function startGame() {
        let gamePrompt = prompt("Do you want to play against Grant?");
        if (gamePrompt.toLowerCase() === 'yes') {
            let userName = prompt("Brave Hero, what is thine Name?");
            startCombat();
        } else if (gamePrompt.toLowerCase() === 'no') {
            console.log('You are not brave enough!');
        } else {
            let userName = prompt("Brave Hero, what is thine Name?");
            startCombat();
        }
    }

    function startCombat() {
        
        let braveHero = {
            name: userName,
            hp: 40,
            wins: 0,
            getDamage: function() {
                return Math.floor(Math.random() * 5 + 1);
            }
        };

        let grant = {
            name: 'Grant The Destroyer',
            hp: 10,
            wins: 0,
            getDamage: function() {
                return Math.floor(Math.random() * 5 + 1);
            }
        };

        while (braveHero.wins < 3 && braveHero.hp >= 1) {
            let atkPrompt = prompt(`${braveHero.name} You have ${braveHero.hp} health. ${grant.name} has ${grant.hp} health. Do you wish to "attack" or "run" me Lord?`)
            if (atkPrompt === "attack") {
                braveHero.hp -= grant.getDamage();
                grant.hp -= braveHero.getDamage();
                if (grant.hp <= 0) {
                    console.log(`${grant.name} has been slain!`);
                    braveHero.wins++;
                    grant.hp = 10;
                }
            } else {
                console.log(`${braveHero.name} You are a coward!`);
                return;
            }
            if (braveHero.hp <= 0) {
                console.log(`${grant.name} has defeated you in combat!`);
                grant.wins++;
                return;
            }
            console.log(`${braveHero.name} You have ${braveHero.hp} hp remaining. ${grant.name} has ${grant.hp} hp remaining`)
            if (braveHero.wins === 3) {
                console.log(`Congratulations! You have defeated ${grant.name} on the battlefeild!`);
                return;
            }
        }
    }
    startGame();
}