import Phaser, { Scene } from "phaser";

export default class GameoverScene extends Scene {
    constructor() {
        super("GameoverScene");
    }

    create() {
        this.add.text(10, 10, "GameoverScene");
    }
}