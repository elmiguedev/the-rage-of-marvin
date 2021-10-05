import Phaser, { Scene } from "phaser"

export default class MainScene extends Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        this.add.text(10, 10, "holis como estas, meto cambiazo en el juego")
    }
}