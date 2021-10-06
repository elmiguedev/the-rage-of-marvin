import Phaser from "phaser"

export default class GameoverScene extends Phaser.Scene {
    constructor() {
        super("GameoverScene")
    }

    init(data) {
        if (data.score) {
            this.score = data.score
        } else {
            this.score = 0;
        }
    }

    create() {
        this.createFace();
        this.createText();
        this.createControls();
        this.createMusic();
    }

    createMusic() {
        // this.sound.play("gameover");
    }

    createFace() {
        this.face = this.add.image(240, 200, "marvin_rage_5");
        this.face.setScale(2);
    }

    createText() {
        const text = this.add.text(
            240,
            400,
            "Bueno pa, fue un trabajo muy duro, arreglamos lo que pudimos, pero al final, la culpa fue del fury. Nos vimos, me voy a tomar unos mates",
        );
        text.setAlign("center");
        text.setWordWrapWidth(350);
        text.setOrigin(0.5)

        const text2 = this.add.text(
            240,
            600,
            "Presiona [ENTER] para darle otra oportunidad al Yori"
        );
        text2.setAlign("center");
        text2.setWordWrapWidth(350);
        text2.setOrigin(0.5)

        const text3 = this.add.text(
            240,
            500,
            `Tu puntaje fue de ${this.score} yoris`
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
}