clicker = {
    character: undefined,
    addProperty: undefined,
    delta: undefined,
    clickDelta: undefined,

    clicker: function(charData, property, delta, clickDelta) {
        this.character = charData;
        this.property = property;
        this.delta = delta;
        this.clickDelta = clickDelta;
    },

    click: function() {
        character[property] += clickDelta;
    },
    update: function() {
        character[property] += delta;
    },

    updateDelta: function(delta) {
        this.delta = delta;
    },

    updateClickDelta: function(clickDelta) {
        this.clickDelta = clickDelta;
    }
}

module.exports = clicker

