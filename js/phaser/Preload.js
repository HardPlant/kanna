var Preload = new Phaser.Scene("Boot");

Preload.preload = function () {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    
};

Preload.create = function() {
    this.scene.start(BootScene);
};