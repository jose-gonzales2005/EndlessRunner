class Load extends Phaser.Scene {
    constructor() {
        super('loading')
    }


    preload() {
        this.load.path = './assets/'
        this.load.image('watah', 'img/Ocean.png')
        this.load.image('plane', 'img/plane1.png')
        this.load.image('pillar', 'img/Pillar.png')
        this.load.image('planeR', 'img/plane2.png')
        this.load.image('planeL', 'img/plane3.png')
        this.load.audio('backTrack', ['audi/backingTrack.mp3'])
        this.load.audio('propStart', ['audi/propStart.mp3'])
        this.load.audio('explode', ['audi/explode.wav'])

    }

    create() {
        this.scene.start('menuScene')
    
    
    }
}