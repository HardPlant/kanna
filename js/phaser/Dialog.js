var DialogScene = new Phaser.Scene("Dialog");

var sceneCalledFrom;
var dialogScene;
var dialog_param;
var reader;

var image;
var name;
var text;
var effect;

DialogScene.init = function(data) {
    console.log(data);
    dialogParam = data;
}

DialogScene.preload = function() {
    reader = textreader.call(this, data.id);
    reader.preload.call(this);
};

DialogScene.create = function() {
    dialogScene = this;
    reader.create.call(this);

    var dialogBtn = createButton.call(this
        , this.cameras.main.width * 0.85
        , this.cameras.main.height * 0.95
        , "복귀"
        , () => {
            closeDialog.call(dialogScene);
        });
};

DialogScene.update = function() {

};

function closeDialog() {
    this.scene.stop(dialogScene.Name);
    this.scene.resume(sceneCalledFrom);
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

