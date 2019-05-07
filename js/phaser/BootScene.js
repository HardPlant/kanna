var BootScene = new Phaser.Scene("Boot");

BootScene.preload = function () {
}

BootScene.create = function () {
    this.scene.start(MainGameScene);

}
BootScene.update = function() {

}