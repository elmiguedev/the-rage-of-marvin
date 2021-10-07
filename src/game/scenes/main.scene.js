import Phaser, { Scene } from "phaser"
import Gopher from "../entities/gopher.entity";
import Marvin from "../entities/marvin.entity";

export default class MainScene extends Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        this.createProps();
        this.createScore();
        this.createAnimations();
        this.createBackground();
        this.createMarvin();
        this.createRageBar();
        this.createRageTimer();
        this.createGophers();
        this.createGophersTimer();
    }

    // methods
    // --------------------
    createProps() {
        this.gopherAppearTime = 600;
        this.gopherSpeed = 3000;
        this.rage = 0;
        this.maxRage = 100;
    }

    createScore() {
        this.score = 0;
        this.scoreText = this.add.text(20, 20, "Puntaje: 0");
    }

    updateScore(n) {
        if (n)
            this.score += n;
        else
            this.score++;
        this.scoreText.setText(`Puntaje: ${this.score}`);
    }

    createAnimations() {
        this.anims.create({
            key: "gopher_hidden",
            frames: this.anims.generateFrameNames("gopher", {
                start: 0,
                end: 0
            })
        })
        this.anims.create({
            key: "gopher_peek",
            frames: this.anims.generateFrameNames("gopher", {
                frames: [0, 1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 2, 1, 0]
            })
        })
        this.anims.create({
            key: "gopher_show",
            frames: this.anims.generateFrameNames("gopher", {
                frames: [0, 1, 3, 5, 7, 9, 11, 12]
            })
        })
        this.anims.create({
            key: "gopher_hide",
            frames: this.anims.generateFrameNames("gopher", {
                frames: [12, 11, 9, 7, 5, 3, 1, 0]
            })
        })

        this.anims.create({
            key: "gopherRasta_hidden",
            frames: this.anims.generateFrameNames("gopherRasta", {
                start: 0,
                end: 0
            })
        })
        this.anims.create({
            key: "gopherRasta_peek",
            frames: this.anims.generateFrameNames("gopherRasta", {
                frames: [0, 1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 2, 1, 0]
            })
        })
        this.anims.create({
            key: "gopherRasta_show",
            frames: this.anims.generateFrameNames("gopherRasta", {
                frames: [0, 1, 3, 5, 7, 9, 11, 12]
            })
        })
        this.anims.create({
            key: "gopherRasta_hide",
            frames: this.anims.generateFrameNames("gopherRasta", {
                frames: [12, 11, 9, 7, 5, 3, 1, 0]
            })
        })

        this.anims.create({
            key: "gopherBad_hidden",
            frames: this.anims.generateFrameNames("gopherBad", {
                start: 0,
                end: 0
            })
        })
        this.anims.create({
            key: "gopherBad_peek",
            frames: this.anims.generateFrameNames("gopherBad", {
                frames: [0, 1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 2, 1, 0]
            })
        })
        this.anims.create({
            key: "gopherBad_show",
            frames: this.anims.generateFrameNames("gopherBad", {
                frames: [0, 1, 3, 5, 7, 9, 11, 12]
            })
        })
        this.anims.create({
            key: "gopherBad_hide",
            frames: this.anims.generateFrameNames("gopherBad", {
                frames: [12, 11, 9, 7, 5, 3, 1, 0]
            })
        })
    }

    createBackground() {
        this.cameras.main.setBackgroundColor(0x81D4FA)
        this.gophersBackground = this.add.rectangle(
            0,
            230,
            480,
            540,
            0xd9a066
        ).setOrigin(0)
        this.sound.stopAll();
        this.sound.play("music", {
            loop: true
        })
    }

    createMarvin() {
        this.marvin = new Marvin(this, 240, 110);
    }

    createRageBar() {
        this.rageBar = this.add.rectangle(
            0,
            0,
            10,
            4,
            0xff0000
        ).setOrigin(0);
        this.refreshRageBar();
    }

    createRageTimer() {
        this.rageTimer = this.time.addEvent({
            delay: 1000,
            repeat: -1,
            callback: () => {
                this.increaseRage();
                this.updateScore();
            }
        })
    }

    createGopher(x, y) {
        const gopher = new Gopher(this, x, y);
        gopher.setSpeed(this.gopherSpeed);
        gopher.onPunch = (g) => {
            switch (g.type) {
                case "rasta":
                    this.punchRastaGopher();
                    break;

                case "bad":
                    this.punchBadGopher();
                    break;

                default:
                case "normal":
                    this.punchNormalGopher();
                    break;
            }
        }
        gopher.onHide = (g) => {
            this.marvin.increaseRage(5);
        }

        return gopher;
    }

    createGophers() {
        this.gophers = [
            this.createGopher(90, 300),
            this.createGopher(240, 300),
            this.createGopher(390, 300),
            this.createGopher(90, 430),
            this.createGopher(240, 430),
            this.createGopher(390, 430),
            this.createGopher(90, 560),
            this.createGopher(240, 560),
            this.createGopher(390, 560),
        ]
    }

    createGophersTimer() {
        this.appearTimer = this.time.addEvent({
            delay: this.gopherAppearTime,
            callback: () => {
                // select random gopher
                const random = Phaser.Math.Between(0, 8);

                // set random type
                const random_type = Phaser.Math.Between(1, 20);
                switch (random_type) {
                    case 1:
                        this.gophers[random].setType("rasta");
                        break;

                    case 2:
                        this.gophers[random].setType("bad");
                        break;

                    default:
                        this.gophers[random].setType("normal");
                        break;
                }

                // show gopher
                this.gophers[random].show();
            },
            repeat: -1
        })
    }

    resetGophersAppearTimer() {
        this.appearTimer.reset({
            delay: this.gopherAppearTime
        })
    }

    updateGopherAppearSpeed() {
        if (this.gopherAppearTime > 300) {
            this.gopherAppearTime -= 10;
            this.appearTimer.delay = this.gopherAppearTime;
        }
    }

    updateGophersSpeed() {
        if (this.gopherSpeed > 50) {
            this.gopherSpeed = this.gopherSpeed - 50;
            this.gophers.forEach(g => {
                g.setSpeed(this.gopherSpeed);
            });
        }
    }

    refreshRageBar() {
        const rageWidth = (this.marvin.rage * this.game.canvas.width) / this.marvin.maxRage;
        this.rageBar.setDisplaySize(
            rageWidth,
            4
        );
    }

    increaseRage() {
        this.marvin.increaseRage(10);
        this.refreshRageBar();
        this.checkGameover();
    }

    checkGameover() {
        if (this.marvin.rage >= 100) {
            this.sound.stopAll();
            this.scene.start("GameoverScene", {
                score: this.score
            });
        }
    }

    punchNormalGopher() {

        // increase speed
        this.updateGophersSpeed();
        this.updateGopherAppearSpeed();
        this.sound.play("punch");
        // keep calm marvin...
        this.marvin.increaseRage(-5);
    }

    punchBadGopher() {
        this.sound.play("punch");
        this.cameras.main.shake();
        this.marvin.increaseRage(30);
    }

    punchRastaGopher() {
        this.sound.play("ganja");
        this.marvin.setRage(0);
    }

}