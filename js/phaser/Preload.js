var Preload = new Phaser.Scene("Boot");

Preload.preload = function () {
    this.load.image("bg_space", "assets/bg_space.jpeg"); 
    this.load.image("mill_button", "assets/m_button.png");
    this.load.image("music_note_1", "assets/music_note_1.png");
    this.load.image("music_note_2", "assets/music_note_2.jpg");
    this.load.image("music_note_3", "assets/music_note_3.jpeg");
};

Preload.create = function() {
    this.scene.start(BootScene);
};