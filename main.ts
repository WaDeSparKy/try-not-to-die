namespace SpriteKind {
    export const FredRun = SpriteKind.create()
    export const THEPuppet = SpriteKind.create()
    export const Win = SpriteKind.create()
    export const PupRun = SpriteKind.create()
    export const Foxy = SpriteKind.create()
    export const FoxRun = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Win, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FoxRun, function (sprite, otherSprite) {
    FoxyRun.destroy()
    TheFoxy.setFlag(SpriteFlag.Invisible, false)
    TheFoxy.follow(mySprite, 25)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -10
    if (mySprite.vy >= 0) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 1 1 5 5 1 1 5 5 . . . . 
. . . 5 f 1 5 5 f 1 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 f 5 5 f 5 5 5 5 . . . 
. . . . 5 5 f f 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    } else if (mySprite.vy < 0) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . f 1 5 5 f 1 5 5 . . . . 
. . . 5 1 1 5 5 1 1 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 f 5 5 f 5 5 5 5 . . . 
. . . . 5 5 f f 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 10
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 1 1 5 5 1 1 5 5 . . . 
. . . 5 5 1 f 5 5 f 1 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 f 5 5 f 5 5 . . . . 
. . . . . 5 5 f f 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PupRun, function (sprite, otherSprite) {
    PuppetRun.destroy()
    Puppet.setFlag(SpriteFlag.Invisible, false)
    Puppet.follow(mySprite, 35)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FredRun, function (sprite, otherSprite) {
    FreddyRun.destroy()
    Freddy.setFlag(SpriteFlag.Invisible, false)
    Freddy.follow(mySprite, 45)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 10
    if (mySprite.vy >= 0) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 5 5 1 1 5 5 1 1 . . . . 
. . . 5 5 5 1 f 5 5 1 f 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 f 5 5 f 5 5 . . . 
. . . . 5 5 5 5 f f 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    } else if (mySprite.vy < 0) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 5 5 1 f 5 5 1 f . . . . 
. . . 5 5 5 1 1 5 5 1 1 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 f 5 5 f 5 5 . . . 
. . . . 5 5 5 5 f f 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    game.over(false, effects.dissolve)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -10
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 1 f 5 5 f 1 . . . . . 
. . . . 5 1 1 5 5 1 1 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 f 5 5 f 5 5 5 . . . 
. . . 5 5 5 5 f f 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
let FoxGhostMode = 0
let FoxyRun: Sprite = null
let PuppetRun: Sprite = null
let FreddyRun: Sprite = null
let TheFoxy: Sprite = null
let Puppet: Sprite = null
let Freddy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 5 1 1 5 5 1 1 5 . . . . 
. . . 5 5 1 f 5 5 f 1 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 f 5 5 f 5 5 5 . . . 
. . . . 5 5 5 f f 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let YouWin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Win)
Freddy = sprites.create(img`
. e e e . . f f f f . . e e e . 
e e e e e f f f f f f e e e e e 
e e e e b e e e e e e b e e e e 
e e e b e e e e e e e e b e e e 
. e b e e e e e e e e e e b e . 
. . e e f f f e e f f f e e . . 
. . e f 1 1 1 e e 1 1 1 f e . . 
. e e e 1 f 1 e e 1 f 1 e e e . 
. e e e 1 1 1 e e 1 1 1 e e e . 
. e e e e e e f f e e e e e e . 
. e e e e e f f f f e e e e e . 
. . e f f e e e e e e f f e . . 
. . e e f f f e e f f f e e . . 
. . e e d f f f f f f d e e . . 
. . . e e f d f f d f e e . . . 
. . . . . e e e e e e . . . . . 
`, SpriteKind.Enemy)
Puppet = sprites.create(img`
. . . . . f f f f f f . . . . . 
. . . . f d d d 1 1 1 f . . . . 
. . . f d d 1 1 1 1 1 1 f . . . 
. . . f d 1 1 1 1 1 1 1 f . . . 
. . f d 1 f 1 1 1 1 f 1 1 f . . 
. . f d f f f 1 1 f f f 1 f . . 
. . f d f f f 1 1 f f f 1 f . . 
. . f d f f f 1 1 f f f 1 f . . 
. f 2 2 1 a 1 1 1 1 a 1 2 2 f . 
. f 2 2 1 a 1 1 1 1 a 1 2 2 f . 
. . e d f f f f f f f f 1 e . . 
. . e d d f f f f f f 1 d e . . 
. . . e d a f f f f a d e . . . 
. . . . e a a f f a a e . . . . 
. . . . . e a 2 2 a e . . . . . 
. . . . . . e e e e . . . . . . 
`, SpriteKind.THEPuppet)
TheFoxy = sprites.create(img`
. 2 2 2 . . . . . . . . 2 2 2 . 
. 2 e 2 2 . . . . . . 2 2 e 2 . 
. 2 2 e 2 2 . 2 2 . 2 2 e 2 2 . 
. . 2 2 2 d 2 2 2 2 d 2 2 2 . . 
. . . 2 d 2 2 2 2 2 2 d 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . f f f 2 2 5 5 2 . . . . 
. . . 2 2 5 5 2 2 5 5 2 2 . . . 
. . 2 2 2 2 2 d d 2 2 2 2 2 . . 
. 2 2 2 2 2 d f f d 2 2 2 2 2 . 
. . 2 2 2 2 d d d d 2 2 2 2 . . 
. . . . 2 f f f f f f 2 . . . . 
. . . . 2 f f f f f f 2 . . . . 
. . . . 2 1 f f f f 1 2 . . . . 
. . . . . 2 1 f f 1 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
`, SpriteKind.Foxy)
FreddyRun = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.FredRun)
PuppetRun = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.PupRun)
FoxyRun = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.FoxRun)
mySprite.setPosition(30, 480)
Freddy.setPosition(24, 328)
PuppetRun.setPosition(432, 370)
Puppet.setPosition(432, 456)
FreddyRun.setPosition(46, 276)
TheFoxy.setPosition(24, 456)
FoxyRun.setPosition(112, 448)
Freddy.setFlag(SpriteFlag.Invisible, true)
FreddyRun.setFlag(SpriteFlag.Invisible, true)
Puppet.setFlag(SpriteFlag.Invisible, true)
PuppetRun.setFlag(SpriteFlag.Invisible, true)
TheFoxy.setFlag(SpriteFlag.Invisible, true)
FoxyRun.setFlag(SpriteFlag.Invisible, true)
scene.cameraFollowSprite(mySprite)
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 2 2 5 1 5 2 2 5 1 5 2 2 2 5 1 
1 1 5 5 5 5 5 1 1 1 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 5 5 2 1 
1 1 5 5 1 5 5 5 5 5 5 5 5 5 5 5 1 5 2 2 2 5 2 2 5 5 2 5 1 5 2 1 
1 1 5 1 1 1 5 2 2 2 2 2 5 1 5 5 5 5 5 2 5 1 5 5 1 5 2 5 5 5 2 1 
1 1 5 5 1 5 2 2 2 2 2 5 5 5 5 2 5 1 5 2 5 5 5 5 5 5 5 5 5 5 5 1 
1 1 5 2 2 2 2 5 2 2 2 1 5 2 2 2 2 5 5 5 5 2 2 2 1 5 5 1 5 1 5 1 
1 1 1 2 2 2 2 1 2 2 2 5 5 5 2 2 2 2 2 5 1 5 2 2 5 5 5 5 5 5 5 1 
1 1 1 2 2 2 2 2 2 2 2 2 2 5 1 5 2 2 5 5 5 5 2 2 2 2 2 2 2 5 1 1 
1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 1 5 2 2 2 2 2 2 2 2 5 5 1 1 
1 1 1 2 2 1 2 2 2 5 5 1 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 1 1 1 1 
1 1 1 2 2 2 2 2 1 5 5 5 5 5 1 5 5 1 5 2 5 1 5 2 2 2 2 1 1 5 5 1 
1 1 1 2 2 2 2 2 2 5 5 2 2 5 5 5 5 5 5 2 5 1 5 2 2 1 1 1 1 5 5 1 
1 1 1 2 2 2 2 2 2 1 5 2 2 2 2 2 2 2 2 2 5 5 5 2 2 1 1 1 1 2 2 1 
1 1 1 2 2 2 2 2 2 2 2 2 5 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 
1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 5 5 5 5 1 5 5 5 1 2 2 2 2 2 2 2 1 
1 1 2 2 2 1 1 1 1 1 1 1 1 1 5 5 1 1 5 5 5 1 2 2 2 1 1 1 1 2 2 1 
1 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 
1 2 2 2 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 1 2 2 1 
1 2 2 2 1 1 1 1 2 2 2 2 2 2 4 2 2 4 2 2 2 2 2 2 2 2 2 5 1 2 2 1 
1 5 1 2 2 2 2 2 2 2 2 2 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 2 1 2 2 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 2 2 1 2 2 1 
1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 2 2 1 1 1 1 1 1 1 1 1 2 2 2 2 2 1 
1 1 1 1 1 1 2 2 2 2 2 1 5 1 2 2 2 1 1 1 1 1 1 1 1 1 2 2 2 2 5 1 
1 2 2 2 2 2 2 1 1 1 2 1 5 1 2 2 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 
1 1 1 2 1 1 2 2 2 2 2 2 2 1 2 2 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 
1 1 1 2 1 1 1 1 1 1 1 5 1 1 2 2 1 1 1 1 1 1 1 1 2 2 2 2 1 1 1 1 
1 1 1 2 2 2 2 2 2 1 1 1 1 2 2 2 1 1 1 1 1 5 5 2 2 1 2 2 1 1 1 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 5 5 5 1 1 2 2 1 1 1 1 
1 2 2 2 2 1 1 1 1 2 2 2 2 2 2 2 1 1 5 5 5 5 5 1 5 1 5 5 1 1 1 1 
1 2 2 2 2 1 1 1 1 1 1 1 1 1 1 2 2 2 5 1 1 1 5 5 5 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(1, img`
e f e e e e e e e f e e e e e e 
e f e e e e e e e f e e e e e e 
e f e e e e e e e f e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e f e e e e e e e f e e 
e e e e e f e e e e e e e f e e 
e e e e e f e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e f e e e e e e e f e e e e e e 
e f e e e e e e e f e e e e e e 
e f e e e e e e e f e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e f e e e e e e e f e e 
e e e e e f e e e e e e e f e e 
e e e e e f e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(2, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
scene.setTile(5, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
scene.setTile(4, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c 5 5 5 c c 5 c c c 5 5 c 5 c 5 
c 5 c c c 5 c 5 c 5 c c c c 5 c 
c 5 5 c c 5 5 5 c c 5 5 c c 5 c 
c 5 c c c 5 c 5 c c c c 5 c 5 c 
c 5 5 5 c 5 c 5 c c 5 5 c c 5 c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c 5 c c c 5 c c 5 c c 5 c 5 c 
c c 5 c 5 c 5 c 5 c 5 c c 5 c c 
c c 5 c 5 c 5 c 5 5 5 c c 5 c c 
c c b 5 c 5 c c 5 c 5 c c 5 c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
info.setScore(0)
scene.placeOnRandomTile(YouWin, 5)
game.onUpdateInterval(5000, function () {
    FoxGhostMode = Math.randomRange(0, 1)
})
forever(function () {
    if (TheFoxy.overlapsWith(mySprite)) {
        mySprite.destroy()
        YouWin.destroy()
        Freddy.destroy()
        Puppet.destroy()
        TheFoxy.destroy()
        scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
        scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
        scene.setTile(2, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
        scene.centerCameraAt(160, 140)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 2 2 2 f f f f f f f f 2 2 2 f f f f f 
f f f f f f f f f f f f f 2 e 2 2 f f f f f f 2 2 e 2 f f f f f 
f f f f f f f f f f f f f 2 2 e 2 2 f 2 2 f 2 2 e 2 2 f f f f f 
f f f f f f f f f f f f f f 2 2 2 d 2 2 2 2 d 2 2 2 f f f f f f 
f f f f f f f f f f f f f f f 2 d 2 2 2 2 2 2 d 2 f f f f f f f 
f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 2 2 5 5 2 f f f f f f f f 
f f f f f f f f f f f f f f f 2 2 5 5 2 2 5 5 2 2 f f f f f f f 
f f f f f f f f f f f f f f 2 2 2 2 2 d d 2 2 2 2 2 f f f f f f 
f f f f f f f f f f f f f 2 2 2 2 2 d f f d 2 2 2 2 2 f f f f f 
f f f f f f f f f f f f f f 2 2 2 2 d d d d 2 2 2 2 f f f f f f 
f f f f f f f f f f f f f f f f 2 f f f f f f 2 f f f f f f f f 
f f f f f f f f f f f f f f f f 2 f f f f f f 2 f f f f f f f f 
f f f f f f f f f f f f f f f f 2 1 f f f f 1 2 f f f f f f f f 
f f f f f f f f f f f f f f f f f 2 1 f f 1 2 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(750)
        game.over(false, effects.melt)
    }
})
forever(function () {
    if (Puppet.overlapsWith(mySprite)) {
        mySprite.destroy()
        YouWin.destroy()
        Freddy.destroy()
        Puppet.destroy()
        TheFoxy.destroy()
        scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
        scene.setTile(2, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
        scene.centerCameraAt(160, 140)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(1200)
        scene.cameraShake(30, 750)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f d d d 1 1 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f d d 1 1 1 1 1 1 f f f f f f f f 
f f f f f f f f f f f f f f f f d 1 1 1 1 1 1 1 f f f f f f f f 
f f f f f f f f f f f f f f f d 1 f 1 1 1 1 f 1 1 f f f f f f f 
f f f f f f f f f f f f f f f d f f f 1 1 f f f 1 f f f f f f f 
f f f f f f f f f f f f f f f d f f f 1 1 f f f 1 f f f f f f f 
f f f f f f f f f f f f f f f d f f f 1 1 f f f 1 f f f f f f f 
f f f f f f f f f f f f f f 2 2 1 a 1 1 1 1 a 1 2 2 f f f f f f 
f f f f f f f f f f f f f f 2 2 1 a 1 1 1 1 a 1 2 2 f f f f f f 
f f f f f f f f f f f f f f e d f f f f f f f f 1 e f f f f f f 
f f f f f f f f f f f f f f e d d f f f f f f 1 d e f f f f f f 
f f f f f f f f f f f f f f f e d a f f f f a d e f f f f f f f 
f f f f f f f f f f f f f f f f e a a f f a a e f f f f f f f f 
f f f f f f f f f f f f f f f f f e a 2 2 a e f f f f f f f f f 
f f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(750)
        game.over(false, effects.melt)
    }
})
forever(function () {
    if (Freddy.overlapsWith(mySprite)) {
        mySprite.destroy()
        YouWin.destroy()
        Freddy.destroy()
        Puppet.destroy()
        TheFoxy.destroy()
        scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
        scene.setTile(2, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
        scene.centerCameraAt(160, 140)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(50)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f b e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(50)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f e e e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f e e e e e f f f f f f f f f f f f f f f f 
f f f f f f f f f f e b e e e e f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e b e e e f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e b e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 1 f e f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 e e e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 1 e e e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e e e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e e e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f e f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f d e e f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(50)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f e e e f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f e e e e e f f f f f f f f f f f f f f 
f f f f f f f f f f e e e b e e e e f f f f f f f f f f f f f f 
f f f f f f f f f f e e e e b e e e f f f f f f f f f f f f f f 
f f f f f f f f f f e e e e e b e f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f e e f f f f f f f f f f f f f f f f 
f f f f f f f f f f e 1 1 1 f e f f f f f f f f f f f f f f f f 
f f f f f f f f f f e 1 f 1 e e e f f f f f f f f f f f f f f f 
f f f f f f f f f f e 1 1 1 e e e f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e e e e e f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e e e e e f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e f f e f f f f f f f f f f f f f f f f 
f f f f f f f f f f e f f f e e f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f d e e f f f f f f f f f f f f f f f f 
f f f f f f f f f f f d f e e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e e e f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(50)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f e e e f f f f f f f f f f f 
f f f f f f f f f f e f f f f f f e e e e e f f f f f f f f f f 
f f f f f f f f f f b e e e e e e b e e e e f f f f f f f f f f 
f f f f f f f f f f e e e e e e e e b e e e f f f f f f f f f f 
f f f f f f f f f f e e e e e e e e e b e f f f f f f f f f f f 
f f f f f f f f f f f f f e e f f f e e f f f f f f f f f f f f 
f f f f f f f f f f 1 1 1 e e 1 1 1 f e f f f f f f f f f f f f 
f f f f f f f f f f 1 f 1 e e 1 f 1 e e e f f f f f f f f f f f 
f f f f f f f f f f 1 1 1 e e 1 1 1 e e e f f f f f f f f f f f 
f f f f f f f f f f e e e f f e e e e e e f f f f f f f f f f f 
f f f f f f f f f f e e f f f f e e e e e f f f f f f f f f f f 
f f f f f f f f f f f e e e e e e f f e f f f f f f f f f f f f 
f f f f f f f f f f f f f e e f f f e e f f f f f f f f f f f f 
f f f f f f f f f f d f f f f f f d e e f f f f f f f f f f f f 
f f f f f f f f f f e f d f f d f e e f f f f f f f f f f f f f 
f f f f f f f f f f f e e e e e e f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(50)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f e e e f f f f f f f f e e e f f f f f f f 
f f f f f f f f f f e e e e e f f f f f f e e e e e f f f f f f 
f f f f f f f f f f e e e e b e e e e e e b e e e e f f f f f f 
f f f f f f f f f f e e e b e e e e e e e e b e e e f f f f f f 
f f f f f f f f f f f e b e e e e e e e e e e b e f f f f f f f 
f f f f f f f f f f f f e e f f f e e f f f e e f f f f f f f f 
f f f f f f f f f f f f e f 1 1 1 e e 1 1 1 f e f f f f f f f f 
f f f f f f f f f f f e e e 1 f 1 e e 1 f 1 e e e f f f f f f f 
f f f f f f f f f f f e e e 1 1 1 e e 1 1 1 e e e f f f f f f f 
f f f f f f f f f f f e e e e e e f f e e e e e e f f f f f f f 
f f f f f f f f f f f e e e e e f f f f e e e e e f f f f f f f 
f f f f f f f f f f f f e f f e e e e e e f f e f f f f f f f f 
f f f f f f f f f f f f e e f f f e e f f f e e f f f f f f f f 
f f f f f f f f f f f f e e d f f f f f f d e e f f f f f f f f 
f f f f f f f f f f f f f e e f d f f d f e e f f f f f f f f f 
f f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(300)
        scene.cameraShake(30, 750)
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f e e e f f f f f f f f e e e f f f f f f f 
f f f f f f f f f f e e e e e f f f f f f e e e e e f f f f f f 
f f f f f f f f f f e e e e b e e e e e e b e e e e f f f f f f 
f f f f f f f f f f e e e b e e e e e e e e b e e e f f f f f f 
f f f f f f f f f f f e b e e e e e e e e e e b e f f f f f f f 
f f f f f f f f f f f f e e f f f e e f f f e e f f f f f f f f 
f f f f f f f f f f f f e f 2 2 2 e e 2 2 2 f e f f f f f f f f 
f f f f f f f f f f f e e e 2 2 2 e e 2 2 2 e e e f f f f f f f 
f f f f f f f f f f f e e e 2 2 2 e e 2 2 2 e e e f f f f f f f 
f f f f f f f f f f f e e e e e e f f e e e e e e f f f f f f f 
f f f f f f f f f f f e e e e e f f f f e e e e e f f f f f f f 
f f f f f f f f f f f f e f f e e e e e e f f e f f f f f f f f 
f f f f f f f f f f f f e e f f f e e f f f e e f f f f f f f f 
f f f f f f f f f f f f e e d f f f f f f d e e f f f f f f f f 
f f f f f f f f f f f f f e e f d f f d f e e f f f f f f f f f 
f f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Eight)
        pause(750)
        game.over(false, effects.melt)
    }
})
forever(function () {
    if (FoxGhostMode == 0) {
        TheFoxy.setFlag(SpriteFlag.Ghost, true)
        TheFoxy.setImage(img`
. b b b . . . . . . . . b b b . 
. b e b b . . . . . . b b e b . 
. b b e b b . b b . b b e b b . 
. . b b b d b b b b d b b b . . 
. . . b d b b b b b b d b . . . 
. . . . b b b b b b b b . . . . 
. . . . c c c b b f f b . . . . 
. . . b b f f b b f f b b . . . 
. . b b b b b d d b b b b b . . 
. b b b b b d c c d b b b b b . 
. . b b b b d d d d b b b b . . 
. . . . b c c c c c c b . . . . 
. . . . b c c c c c c b . . . . 
. . . . b 1 c c c c 1 b . . . . 
. . . . . b 1 c c 1 b . . . . . 
. . . . . . b b b b . . . . . . 
`)
    } else if (FoxGhostMode == 1) {
        TheFoxy.setFlag(SpriteFlag.Ghost, false)
        TheFoxy.setImage(img`
. 2 2 2 . . . . . . . . 2 2 2 . 
. 2 e 2 2 . . . . . . 2 2 e 2 . 
. 2 2 e 2 2 . 2 2 . 2 2 e 2 2 . 
. . 2 2 2 d 2 2 2 2 d 2 2 2 . . 
. . . 2 d 2 2 2 2 2 2 d 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . f f f 2 2 5 5 2 . . . . 
. . . 2 2 5 5 2 2 5 5 2 2 . . . 
. . 2 2 2 2 2 d d 2 2 2 2 2 . . 
. 2 2 2 2 2 d f f d 2 2 2 2 2 . 
. . 2 2 2 2 d d d d 2 2 2 2 . . 
. . . . 2 f f f f f f 2 . . . . 
. . . . 2 f f f f f f 2 . . . . 
. . . . 2 1 f f f f 1 2 . . . . 
. . . . . 2 1 f f 1 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
`)
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
