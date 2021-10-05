import Phaser, { Game } from "phaser"
import MainScene from "./scenes/main.scene";

export default new Game({
    type: Phaser.AUTO,
    width: 320,
    height: 200,
    scene: [
        MainScene
    ]
});