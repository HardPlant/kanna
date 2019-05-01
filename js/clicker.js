var clicker = {
    character: undefined,
    addProperty: undefined,
    delta: undefined,
    clickDelta: undefined,

    clicker: function(charData, property, delta, clickDelta) {
        this.character = charData;
        this.property = property;
        this.delta = delta;
        this.clickDelta = clickDelta;
        
        return this;
    },

    click: function() {
        this.character[this.property] += this.clickDelta;
    },
    getCurrentStat: function() {
        return this.character[this.property];
    },
    update: function() {
        this.character[this.property] += this.delta;
    },

    updateDelta: function(delta) {
        this.delta = delta;
    },

    updateClickDelta: function(clickDelta) {
        this.clickDelta = clickDelta;
    }
}