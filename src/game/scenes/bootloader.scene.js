import Phaser, { Scene } from "phaser";
import gopherPng from "../assets/img/gopher.png";
import gopherRastaPng from "../assets/img/gopherRasta.png";
import gopherBadPng from "../assets/img/gopherBad.png";
import marvinRage1Png from "../assets/img/marvin_rage_1.png";
import marvinRage2Png from "../assets/img/marvin_rage_2.png";
import marvinRage3Png from "../assets/img/marvin_rage_3.png";
import marvinRage4Png from "../assets/img/marvin_rage_4.png";
import marvinRage5Png from "../assets/img/marvin_rage_5.png";

export default class BootloaderScene extends Scene {
    constructor() {
        super("BootloaderScene");
    }

    preload() {

        this.load.spritesheet("gopher", gopherPng, {
            frameWidth: 96,
            frameHeight: 96,
        });
        this.load.spritesheet("gopherBad", gopherBadPng, {
            frameWidth: 96,
            frameHeight: 96,
        });
        this.load.spritesheet("gopherRasta", gopherRastaPng, {
            frameWidth: 96,
            frameHeight: 96,
        });

        this.load.image("marvin_rage_1", marvinRage1Png);
        this.load.image("marvin_rage_2", marvinRage2Png);
        this.load.image("marvin_rage_3", marvinRage3Png);
        this.load.image("marvin_rage_4", marvinRage4Png);
        this.load.image("marvin_rage_5", marvinRage5Png);

        this.load.on("complete", () => {
            this.scene.start("MainScene");
        })
    }

    create() {
        this.add.text(10, 10, "BootloaderScene");
    }
}