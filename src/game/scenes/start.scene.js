import Phaser from "phaser"

export default class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene")
    }

    update() {
        if (this.input.activePointer.isDown) {
            this.start();
        }
    }

    create() {
        this.createFace();
        this.createText();
        this.createControls();
        this.createMusic();
    }

    createFace() {
        this.face = this.add.image(240, 200, "marvin_rage_1");
        this.face.setScale(2);
    }

    createText() {
        const text = this.add.text(
            240,
            370,
            "Esta API me tiene cansado, estos proyectos en GO me estan llendando de bronca >:V. Me voy a desquitar pegándole a algunos gophers"
        );
        text.setAlign("center");
        text.setWordWrapWidth(350);
        text.setOrigin(0.5)

        const text2 = this.add.text(
            240,
            480,
            "Presiona [ENTER/CLICK/TOUCH] para ayudar al Marvin a disminuir su ira golpeando algunos Gophers"
        );
        text2.setAlign("center");
        text2.setWordWrapWidth(350);
        text2.setOrigin(0.5)

        const text3 = this.add.text(
            240,
            570,
            "[CLICK/TOUCH] para golpear un gopher. Algunos gopher RASTA te relajan, y cuidado con los gopher malos! te dan mas bronca!"
        );
        text3.setAlign("center");
        text3.setWordWrapWidth(350);
        text3.setOrigin(0.5)

    }

    createControls() {
        this.enter = this.input.keyboard.addKey("enter");
        this.enter.onDown = (e) => {
            this.start
        }

    }

    createMusic() {
        // this.sound.play("intro");
    }

    start() {

        this.sound.stopAll();
        this.scene.start("MainScene");
    }
}