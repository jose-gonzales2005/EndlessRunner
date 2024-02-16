class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    create() {

        let menuConfig = {
            fontFamily: 'Papyrus',
            fontSize: '72px',
            backgroundColor: '#E30B5C',
            color: '#0000FF',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)


        let title02 = this.add.text(centerX, centerY + 100, 'Space to Play, Arrow Keys to Fly, Make it All the Way', 64).setOrigin(0.5).setTint(0xff00ff)
        let title01 = this.add.text(centerX, centerY, 'Wings of Glory', {fontSize: '80px'}).setOrigin(0.5).setTint(0xff00ff)
        //this.add.text(centerX, centerY - 400, 'Avoid the obstacles in the ocean and make it safely home using the Arrow Keys!', menuConfig).setOrigin(0.5)        

        //menuConfig.backgroundColor = '#E30B5C'
        //menuConfig.color = '#E30B5C'
        
        this.sound.play('backTrack', { volume: 0.2 })
        
        this.tweens.add({
            targets: title01,
            duration: 2500,
            angle: { from: -3, to: 3 },
            yoyo: true,
            repeat: -1,
            onYoyo: function() {
                this.cameras.main.shake(100, 0.025);
            },
            onYoyoScope: this
        })

        this.tweens.add({
            targets: title02,
            duration: 2500,
            angle: { from: -1, to: 4 },
            yoyo: true,
            repeat: -1,
            onYoyo: function() {
                this.cameras.main.shake(10, 0.25);
            },
            onYoyoScope: this
        })
        
        //this.scene.start('playtimeScene')
    
    }


    update() {
        if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            this.sound.play('propStart', {volume: 0.6})
            this.scene.start('playtimeScene')
        }
    }
}