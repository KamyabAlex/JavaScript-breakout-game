import Phaser from 'phaser'

class Brick extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'brick')

        this.game.physics.arcade.enableBody(this)

        this.body.immovable = true
    }
}

export default Brick
