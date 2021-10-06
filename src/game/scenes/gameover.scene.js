import Phaser, { Scene } from "phaser";

export default class GameoverScene extends Scene {
    constructor() {
        super("GameoverScene");
    }

    preload() {
        this.load.on("complete", () => {
            this.scene.start("StartScene");
        })
    }

    create() {
        this.add.text(10, 10, "GameoverScene");
    }
}