import Phaser from "phaser"

export default class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene")
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
            400,
            "Vieja, acabo de deployar el back del scheduling-fe, me das una mano con los bugs?"
        );
        text.setAlign("center");
        text.setWordWrapWidth(350);
        text.setOrigin(0.5)

        const text2 = this.add.text(
            240,
            500,
            "Presiona [ENTER] para ayudar al Yori con los bugs"
        );
        text2.setAlign("center");
        text2.setWordWrapWidth(350);
        text2.setOrigin(0.5)

        const text3 = this.add.text(
            240,
            550,
            "[ESPACE] para disparar, [FLECHAS] para moverse"
        );
        text3.setAlign("center");
        text3.setWordWrapWidth(350);
        text3.setOrigin(0.5)

    }

    createControls() {
        this.enter = this.input.keyboard.addKey("enter");
        this.enter.onDown = (e) => {
            this.sound.stopAll();
            this.scene.start("MainScene");
        }
    }

    createMusic() {
        // this.sound.play("intro");
    }
}