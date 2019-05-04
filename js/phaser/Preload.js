var Preload = new Phaser.Scene("Boot");

Preload.preload = function () {
};

Preload.create = function() {
    this.scene.start(BootScene);
};