var DialogScene = new Phaser.Scene("Dialog");

var sceneCalledFrom;
var dialogScene;
var dialogParam;
var reader;

var image;
var name;
var text;
var effect;

var nameLabel;
var dialogLabel;

DialogScene.init = function(data) {
    console.log(data);
    dialogParam = data;
    sceneCalledFrom = data.calledFrom;

    reader = textreader.call(this, data.dialogId);
}

DialogScene.preload = function() {
    reader.preload.call(this);
};

DialogScene.create = function() {
    dialogScene = this;
    reader.create.call(this);

    drawUILabel.call(this);

    getNextDialog();

    this.input.on('pointerdown', function(pointer) {
        getNextDialog();
    });
};

DialogScene.update = function() {

};

function closeDialog() {
    this.scene.resume(sceneCalledFrom);
    this.scene.setVisible(true, sceneCalledFrom);
    this.scene.stop();
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

    return btn;
}

function drawUILabel() {
    var dialogBtn = createButton.call(this
        , this.cameras.main.width * 0.85
        , this.cameras.main.height * 0.95
        , "복귀"
        , () => {
            closeDialog.call(dialogScene);
        });

    nameLabel = this.make.text({
        x: this.cameras.main.width * 0.1,
        y: this.cameras.main.height * 0.6,
        text: name,
        style: {
            font: "2em Sunflower",
            fill: "#ffffff"
        }
    });
    
    dialogLabel = this.make.text({
        x: this.cameras.main.width * 0.1,
        y: this.cameras.main.height * 0.65,
        text: "",
        style: {
            font: "2em Do Hyeon",
            fill: "#ffffff"
        }
    });
}

function getNextDialog() {
    if (typeof(reader) === "undefined" || !reader.isNextDialogPresent()) {
        return;
    }

    var data = reader.getNextDialog();

    image = data.Image;
    name = data.Name;
    text = data.Dialog;

    updateDialog();    
}


function updateDialog() {
    nameLabel.setText(name)
    dialogLabel.setText("");
    updateDialogSequential(dialogLabel);
}

var sequence;
var currentSeq;
var currentText;

function updateDialogSequential(phaserText) {
    sequence = text.split("");
    currentSeq = 0;
    currentText = "";

    update();

    function update() {
        if (sequence[currentSeq]){
            currentText += sequence[currentSeq++];
        }
        phaserText.setText(currentText);

        if (currentText.length < sequence.length) {
            setTimeout(update, 100);
        }
    }
}