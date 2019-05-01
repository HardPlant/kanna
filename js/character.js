var baseCharacter = {
    name: null,
    hp: null,
    sprite: null,
    getBase: function () {
        return JSON.parse(JSON.stringify(this));
    },
    getDamage: null
}

function kanna() {
    var character = baseCharacter.getBase();
    character.name = "kanna";
    character.act = 1;

    return character;

}

function attack(character, property, target) {
    var exists = 
        character.getDamage
        && target.hp;
    
    if (!exists) {
        return;
    }

    target.hp -= character.getDamage(property);
}

function testFoe() {
    var character = baseCharacter.getBase();
    
    character.hp = 100;

    return character;
}
