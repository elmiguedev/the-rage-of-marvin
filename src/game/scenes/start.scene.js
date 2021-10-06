import Phaser, { Scene } from "phaser";

export default class StartScene extends Scene {
    constructor() {
        super("StartScene");
    }

    create() {
        this.add.text(10, 10, "StartScene");
    }
}