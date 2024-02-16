class Playtime extends Phaser.Scene {
    constructor() {
        super('playtimeScene')

    }

    create() {

        this.watah = this.add.tileSprite(0, 0, 10000, 10000, 'watah').setOrigin(0, 0)
        this.myShip = new Ship(this, centerX, centerY, 'plane').setOrigin(0.5, 0)

        this.timeScore = this.add.text(150, 50, 'TIME: ', {fontSize: '30px', color: '#FFFFFF'}).setOrigin(0.5).setTint(0xff00ff)

        this.startTime = Date.now()
        console.log(this.startTime)

        this.obstacles = []
        this.obstacleTime = 0
        this.isDead = false

        this.deadText = this.add.text(centerX, centerY, '', {fontSize: '40px'}).setOrigin(0.5)

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
        if (this.isDead) {
            if (time - this.obstacleTime >= 5000) {
                this.scene.start('menuScene')
            }

        } else {
            if (time - this.obstacleTime >= 5000 && this.obstacles.length < 10) {
                this.obstacleTime = time
                this.obstacles.push(new Pillar(this, Phaser.Math.Between(0, 960), -256, 'pillar').setOrigin(0.5, 0))
            }
            this.watah.tilePositionY -= 2
            this.obstacles.forEach((obstacle) => {
                obstacle.update()
                if (this.checkCollision(this.myShip, obstacle)) {
                    this.isDead = true
                    this.deadText.setText('GAME OVER: YOU DIED')
                    this.deadText.setDepth(100)
                    this.obstacleTime = time
                    this.shipExplode()
                    //this.add.text(centerX, centerY - 400, 'GAME OVER').setOrigin(0.5)
                }
            })
            this.myShip.update()

            this.input.keyboard.on('keyup-RIGHT', event => {

                //console.log('right up!')
                this.myShip.setTexture('plane')

            })
            this.input.keyboard.on('keyup-LEFT', event => {

                this.myShip.setTexture('plane')

            })
            
            let now = Date.now()
            let ts = ((now - this.startTime) / 1000).toFixed(2)
            this.timeScore.setText(`TIME: ${ts}`) 
        }


    }

    shipExplode() {


        this.sound.play('explode')
    }

}