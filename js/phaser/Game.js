var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        },
    },
    scene: [Preload, BootScene, MainGameScene]
};

var game = new Phaser.Game(config);
