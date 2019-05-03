var BootScene = new Phaser.Scene("Boot");

BootScene.preload = function () {
}

BootScene.create = function () {
    this.make.text({
        x: this.cameras.main.width / 2,
        y: this.cameras.main.height / 2,
        text: "감자먹구싶다",
        style: {
            fontFamily: "Sunflower",
            fontSize: "32px",
            fill: "#ffffff"
        }
    });
}
BootScene.update = function() {

}




