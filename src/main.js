// Noah Dane
// Endless Runner hoorayy
// 
let config = {
    parent: 'meGame',
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug : troo
            gravity: {
                x: 0,
                y: 0,
            }
        }
    },
    scene: [Load, Menu, Playtime]
}

let keyLeft, keyRight, keyUp, keyDown, keySpace

let game = new Phaser.Game(config);




let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
let w = game.config.width;
let h = game.config.height;