import Phaser from 'phaser'

class Ball extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'ball')

        this.game.physics.arcade.enableBody(this)

        this.checkWorldBounds = true
        this.body.collideWorldBounds = true

        this.body.bounce.set(1)
    }

    isOnLeftOfPaddle (paddle) {
        return this.x < paddle.x
    }

    isOnRightOfPaddle (paddle) {
        return this.x > paddle.x
    }

    pushLeft (paddle) {
        this.adjustXVelocity(-10 * (paddle.x - this.x))
    }

    pushRight (paddle) {
        this.adjustXVelocity(10 * (this.x - paddle.x))
    }

    adjustXVelocity (value) {
        this.body.velocity.x = value
    }
}

export default Ball
