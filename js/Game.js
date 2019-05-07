var config = {
    type: Phaser.AUTO,
    width: 600, //window.innerWidth * window.devicePixelRatio,
    height: 800, //window.innerHeight * window.devicePixelRatio,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        },
    },
    scene: [Preload, BootScene, MainGameScene, DialogScene]
};

var game = new Phaser.Game(config);
