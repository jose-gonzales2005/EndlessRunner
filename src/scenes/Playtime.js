class Playtime extends Phaser.Scene {
    constructor() {
        super('playtimeScene')

    }

    create() {

        this.watah = this.add.tileSprite(0, 0, 10000, 10000, 'watah').setOrigin(0, 0)
        this.myShip = new Ship(this, 100, 100, 'plane').setOrigin(0.5, 0)

        this.obstacles = []
        this.obstacleTime = 0
        
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

       

    }
    
    checkCollision(ship, pillar) {
        // simple AABB checking
        if (ship.x < pillar.x + pillar.width && 
          ship.x + ship.width > pillar.x && 
          ship.y < pillar.y + pillar.height &&
          ship.height + ship.y > pillar.y) {
            return true;
        } else { 
            return false;
          }
    }
    
    update(time, delta) {
        if(time - this.obstacleTime >= 5000 && this.obstacles.length < 10) {
            this.obstacleTime = time 
            this.obstacles.push(new Pillar(this, Phaser.Math.Between(0, 960), -256, 'pillar').setOrigin(0.5, 0))
        }
        this.watah.tilePositionY -= 2
        this.obstacles.forEach((i) => {
            i.update()
            if (this.checkCollision(this.myShip, i)) {
                console.log('wrong') 
            }
        })
        this.myShip.update()

      

     }

     

}