class Pillar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
//INCLUDE IN SPRITE SHEET A JSON ATLAS FILE LOOK UP LESHY LABS 
//JSON Allows to use specific frame and determine when to start n stop
        scene.add.existing(this)
        this.obSpeed = 2//game.settings.obSpeed
    }

    update() {
        this.y += this.obSpeed
        if(this.y >= h) {
            this.x = Phaser.Math.Between(0, 960)
            this.y = -256 
        }
        
        
        //if(this.y )
    }


    reset() {
        this.y = game.config.height
    }
}