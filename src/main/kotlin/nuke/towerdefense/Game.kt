package nuke.towerdefense

import games.perses.game.DrawMode
import games.perses.game.Game
import games.perses.game.Screen
import games.perses.sprite.Sprite
import games.perses.sprite.SpriteBatch
import games.perses.text.Texts
import games.perses.texture.Textures
import kotlin.browser.document
import kotlin.js.Math.cos
import kotlin.js.Math.sin


class GameScreen : Screen() {
    var sprites = SpriteBatch()

    var sprite = Sprite("smiley")
    var x = 0f
    var y = 0f

    override fun loadResources() {
        Textures.load("smiley", "img/smiley.png")
    }

    override fun closeResources() {
        Textures.dispose()
    }

    override fun update(time: Float, delta: Float) {
        Game.clearRed = sin((time / 3).toDouble()).toFloat()
        Game.clearGreen = sin((time / 5).toDouble()).toFloat()

        x = (400f + sin((time * 1.5)) * 300f).toFloat()
        y = (Game.view.height / 2.0 + cos((time * 2.5)) * 300f).toFloat()
    }

    override fun render() {
        sprites.draw(sprite, x, y, scale = 0.1f)
        sprites.render()

        Texts.drawText(300f, Game.view.height / 2f, "Hello Kudens!", font = "bold 62pt Arial", fillStyle = "rgba(255,255,0,0.75)")
    }

}

fun main(args: Array<String>) {
    // set border color
    document.body?.style?.backgroundColor = "#242"

    Game.view.setToWidth(1200f)
    Game.view.drawMode = DrawMode.LINEAR

    Game.view.minAspectRatio = 1200f/1400f
    Game.view.maxAspectRatio = 1200f/800f

    Game.setClearColor(0f, 0f, 0.5f, 0.5f)

    Game.start(GameScreen())
}