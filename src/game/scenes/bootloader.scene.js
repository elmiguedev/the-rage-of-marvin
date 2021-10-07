import Phaser, { Scene } from "phaser";
import gopherPng from "../assets/img/gopher.png";
import gopherRastaPng from "../assets/img/gopherRasta.png";
import gopherBadPng from "../assets/img/gopherBad.png";
import marvinRage1Png from "../assets/img/marvin_rage_1.png";
import marvinRage2Png from "../assets/img/marvin_rage_2.png";
import marvinRage3Png from "../assets/img/marvin_rage_3.png";
import marvinRage4Png from "../assets/img/marvin_rage_4.png";
import marvinRage5Png from "../assets/img/marvin_rage_5.png";
import musicMp3 from "../assets/sounds/music.mp3";
import introMp3 from "../assets/sounds/intro.mp3";
import gameoverMp3 from "../assets/sounds/gameover.mp3";
import ganjaMp3 from "../assets/sounds/ganja.mp3";
import punchMp3 from "../assets/sounds/kill.mp3";
import hurryMp3 from "../assets/sounds/hurry-up.mp3";

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

        this.load.audio("intro", [introMp3]);
        this.load.audio("gameover", [gameoverMp3]);
        this.load.audio("music", [musicMp3]);
        this.load.audio("punch", [punchMp3]);
        this.load.audio("ganja", [ganjaMp3]);
        this.load.audio("hurry", [hurryMp3]);

        this.load.on("complete", () => {
            this.scene.start("StartScene");
        })
    }

    create() {
        this.add.text(10, 10, "BootloaderScene");
    }
}