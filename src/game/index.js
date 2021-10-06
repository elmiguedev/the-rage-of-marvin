import Phaser, { Game } from "phaser"
import BootloaderScene from "./scenes/bootloader.scene";
import GameoverScene from "./scenes/gameover.scene";
import MainScene from "./scenes/main.scene";
import StartScene from "./scenes/start.scene";

export default new Game({
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    scene: [
        BootloaderScene,
        StartScene,
        MainScene,
        GameoverScene
    ]
});