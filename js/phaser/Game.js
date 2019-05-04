var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        },
    },
    scene: [Preload, BootScene, MainGameScene]
};

var game = new Phaser.Game(config);
