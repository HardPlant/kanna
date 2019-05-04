var MainGameScene = new Phaser.Scene("MainGame");

var updateRegistry = [];
var kanna;
var totalActLabel;
var currentActLabel;
var frame = 0;

MainGameScene.preload = function () {
    kanna = kanna();
    clicker = clicker.clicker(kanna, "act", 1, 1 * 60);
    updateRegistry.push(clicker);
}

MainGameScene.create = function () {
    drawActLabel.call(this);
}

MainGameScene.update = function() {
    frame++;
    if (frame > 60) {
        frame = 0;
    }

    if (frame % 10 === 0) {
        updateActLabel.call(this);
    }

    updateRegistry.forEach(function(item) {
        if (typeof(item.update) === "function") {
            item.update();
        }
    });
}

function drawActLabel() {
    totalActLabel = this.make.text({
        x: this.cameras.main.width * 0.2,
        y: this.cameras.main.height * 0.8,
        text: "현재 연기력: " + clicker.getCurrentStat(),
        style: {
            fontSize: "24px",
            fill: "#ffffff"
        }
    });
    
    currentActLabel = this.make.text({
        x: this.cameras.main.width * 0.2,
        y: this.cameras.main.height * 0.9,
        text: "초당 연기력:" + clicker.delta,
        style: {
            fontSize: "24px",
            fill: "#ffffff"
        }
    });
}

function updateActLabel() {
    totalActLabel.setText("현재 연기력: " + clicker.getCurrentStat());
    currentActLabel.setText("초당 연기력:" + clicker.delta);
}


