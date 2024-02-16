class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        
        scene.add.existing(this)
        this.shipSpeed = 3
        this.isHit = false 
        

    }

    create() {
        //console.log('HELPP')

    }

    update() {
        
        if(keyLeft.isDown && this.x >= this.width / 2) {
            this.x -= this.shipSpeed
            //console.log('leftn')
        } 
        if(keyRight.isDown && this.x <= w - this.width / 2) {
            this.x += this.shipSpeed 
            //console.log('rightn')
        }
        if(keyUp.isDown && this.y >= -this.height / 2) {
            this.y -= this.shipSpeed
            //onsole.log('upper')
        }
        if(keyDown.isDown&& this.y <= h - this.height / 2) {
            this.y += this.shipSpeed
            //console.log('downers')
        }
        /*} else if(keyDown.isDown && keyLeft.isDown) {
            this.x && this.y + this.shipSpeed*/
    }


    /*if(this.cursors.left.isDown) {//&& this.myShip.x >= this.myShip.width / 2){
        //this.myShip.x -= 5
        console.log('movin left')
        this.myShip.setVelocityX(-300)
    } else if(this.cursors.right.isDown) {//&& this.myShip.x <= w - this.myShip.width / 2) {
        //this.myShip.x += 5
        console.log('goin right')
        this.myShip.setVelocityX(-300)
    } else if(this.cursors.down.isDown && this.myShip.y <= h - this.myShip.height / 2){
        this.myShip.y += 5
    } else if(this.cursors.up.isDown && this.myShip.y >= -this.myShip.height / 2){
        this.myShip.y -= 5                  
    }*/
}