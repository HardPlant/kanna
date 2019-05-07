var clicker = {
    character: undefined,
    delta: undefined,

    clicker: function(charData, property, delta) {
        this.character = charData;
        this.property = property;
        this.delta = delta;
        
        return this;
    },

    click: function() {
        this.character[this.property] += this.delta * 60;
    },
    getCurrentStat: function() {
        return this.character[this.property];
    },
    update: function() {
        this.character[this.property] += this.delta;
    },
    updateDelta: function(delta) {
        this.delta += delta;
    },
    getClickDelta: function(){
        return this.delta * 60;
    }
}