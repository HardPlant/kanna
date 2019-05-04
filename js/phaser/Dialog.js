var DialogScene = new Phaser.Scene("Dialog");

var sceneCalledFrom;

DialogScene.preload = function() {

};

DialogScene.create = function() {

};

DialogScene.update = function() {

};

function closeDialog() {
    this.scene.stop("Dialog");
    this.scene.resume(sceneCalledFrom);
}