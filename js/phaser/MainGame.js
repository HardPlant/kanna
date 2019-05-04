var MainGameScene = new Phaser.Scene("MainGame");

var updateRegistry = [];
var kanna;
var totalActLabel;
var currentActLabel;
var frame = 0;

MainGameScene.preload = function () {
    this.load.image(); 
    this.load.image("mill_button", "asset/button.png");
}

MainGameScene.create = function () {
    initClicker();

    drawActLabel.call(this);

    this.input.on('pointerdown', function(pointer) {
        clicker.click();
    });
}

MainGameScene.update = function() {
    frame++;
    if (frame > 60) {
        frame = 0;
    }

    if (frame % 10 === 0) {
        updateActLabel.call(this);
        saveClickerValue(clicker);
    }

    updateRegistry.forEach(function(item) {
        if (typeof(item.update) === "function") {
            item.update();
        }
    });
}

function drawActLabel() {
    totalActLabel = this.make.text({
        x: this.cameras.main.width * 0.1,
        y: this.cameras.main.height * 0.85,
        text: "현재 연기력: ",
        style: {
            fontSize: "24px",
            fill: "#ffffff"
        }
    });
    
    currentActLabel = this.make.text({
        x: this.cameras.main.width * 0.1,
        y: this.cameras.main.height * 0.9,
        text: "초당 연기력:",
        style: {
            fontSize: "24px",
            fill: "#ffffff"
        }
    });
}

function initClicker() {
    kanna = kanna();
    var clickerValue = loadClickerValue();
    kanna[clickerValue.property] = clickerValue[clickerValue.property];

    var property = clickerValue.property;
    var delta  = clickerValue.delta;
    var clickDelta = clickerValue.clickDelta;

    clicker = clicker.clicker(kanna, property, delta, clickDelta);
    updateRegistry.push(clicker);

}

function loadClickerValue() {
    var clickerValue = JSON.parse(localStorage.getItem('stats'));

    if (typeof(clickerValue) !== "object"
        || typeof(clickerValue.property) !== "string"
        || typeof(clickerValue.act) !== "number"
        || typeof(clickerValue.clickDelta) !== "number") {
            clickerValue = {};
            clickerValue.property = "act";
            clickerValue[clickerValue.property] = 1;
            clickerValue.delta = 1 / 60;
            clickerValue.clickDelta = 1;
        }
    
    console.log(clickerValue);

    return clickerValue;
}

function saveClickerValue(clicker) {
    localStorage.setItem('stats', JSON.stringify({
        stat: clicker.getCurrentStat(),
        property: clicker.property,
        delta: clicker.delta,
        clickDelta: clicker.clickDelta
    }));
}

function updateActLabel() {
    totalActLabel.setText("현재 연기력: " + Number(clicker.getCurrentStat()).toFixed(2));
    currentActLabel.setText("초당 연기력: " + Number(clicker.delta * 60).toFixed(2));
}
