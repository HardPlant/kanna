var MainGameScene = new Phaser.Scene("MainGame");

var updateRegistry = [];
var kanna;
var totalActLabel;
var currentActLabel;
var frame = 0;
var scene;

MainGameScene.preload = function () {
}

MainGameScene.create = function () {
    scene = this;

    this.bg = this.add.image(0, 0, "bg_space");
    this.bg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    initClicker();

    drawUI.call(this);

    this.input.on('pointerdown', function(pointer) {
        clicker.click();

        drawRandomNote.call(scene, pointer.downX, pointer.downY);
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

function initClicker() {
    kanna = kanna();
    var clickerValue = loadClickerValue();
    kanna[clickerValue.property] = clickerValue.stat;

    var property = clickerValue.property;
    var delta  = clickerValue.delta;

    clicker = clicker.clicker(kanna, property, delta);
    updateRegistry.push(clicker);

}

function loadClickerValue() {
    var clickerValue = JSON.parse(localStorage.getItem('stats'));

    if (typeof(clickerValue) !== "object"
        || typeof(clickerValue.property) !== "string"
        || typeof(clickerValue.stat) !== "number") {
            clickerValue = {};
            clickerValue.property = "act";
            clickerValue.stat = 1;
            clickerValue.delta = 1 / 60;
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
    totalActLabel.setText("현재 연기력: " + Number(clicker.getCurrentStat()).toFixed(4));
    currentActLabel.setText("초당 연기력: " + Number(clicker.delta * 60).toFixed(4));
}

function drawUI() {
    drawActLabel.call(this);
    createButton.call(this,
        this.cameras.main.width * 0.85,
        this.cameras.main.height * 0.85,
        "업그레이드",
        () => {
            clicker.updateDelta(0.001);
        });
        
    createButton.call(this
        , this.cameras.main.width * 0.85
        , this.cameras.main.height * 0.9
        , "mill_button"
        , () => {
            clicker.character[clicker.property] = 1;
            clicker.delta = 0.001;
        });
}

function drawActLabel() {
    totalActLabel = this.make.text({
        x: this.cameras.main.width * 0.1,
        y: this.cameras.main.height * 0.85,
        text: "현재 연기력: ",
        style: {
            fontSize: "2em",
            fill: "#ffffff"
        }
    });
    
    currentActLabel = this.make.text({
        x: this.cameras.main.width * 0.1,
        y: this.cameras.main.height * 0.9,
        text: "초당 연기력:",
        style: {
            fontSize: "2em",
            fill: "#ffffff"
        }
    });
}

function drawRandomNote(x, y) {
    var noteParticle = this.add.particles("music_note_3");
    var well = noteParticle.createGravityWell({
        x: this.cameras.main.width * 0.5,
        y: this.cameras.main.height * 0.5,
        power: 5,
        epsilon: 100,
        gravity: 100
    });

    var emitter = noteParticle.createEmitter();

    emitter.setPosition(x, y);
    emitter.setSpeed(200);
    emitter.setBlendMode(Phaser.BlendModes.ADD);
    emitter.setFrequency(100);
    
    this.time.delayedCall(1000, function() {
        noteParticle.destroy();
    });
}

function createButton(x, y, text, callback) {
    var btn = this.add.sprite(x, y, "mill_button");

    btn.text = this.make.text({
        x: btn.x,
        y: btn.y,
        text: text,
        style: {
            fontSize: "2em",
            fill: "#000"
        }
    });

    btn.text.setOrigin(0.5, 0.5);

    btn.setInteractive();

    btn.on('pointerdown', callback);
}

