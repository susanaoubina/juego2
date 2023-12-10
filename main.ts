controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Coche.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Coche.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Coche.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
info.onCountdownEnd(function () {
    if (info.score() >= 100) {
        game.over(true, effects.confetti)
    } else {
        game.over(false, effects.melt)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Coche.setImage(img`
        . . . . . . e e c c e e . . . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        . . . . 2 c 2 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 2 4 2 2 2 2 2 c 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 c 2 4 4 2 2 2 c 2 f . 
        . . . e 2 c e c c c c e c 2 e . 
        . . . e 2 e c b b b b c e 2 e . 
        . . . e 2 e b b b b b b e 2 e . 
        . . . e e e e e e e e e e e e . 
        . . . f e d e e e e e e d e f . 
        . . . f e 2 d e e e e d 2 e f . 
        . . . f f e e e e e e e e f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, sprites.castle.tileGrass1)
    info.changeScoreBy(10)
})
let Coche: Sprite = null
game.showLongText("Tu coche dispone de 60 segundos para recoger a 10 o más personas por el laberinto. Suerte!", DialogLayout.Bottom)
info.setScore(0)
Coche = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Coche, 100, 100)
scene.setBackgroundColor(5)
tiles.setTilemap(tilemap`nivel1`)
tiles.placeOnRandomTile(Coche, sprites.castle.tileGrass1)
scene.cameraFollowSprite(Coche)
let PersonaAzul = sprites.create(img`
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . 8 9 9 9 9 9 9 8 . . . . 
    . . . . 8 9 8 9 9 8 9 8 . . . . 
    . . . . 8 9 9 9 9 9 9 8 . . . . 
    . . . . 8 9 9 8 8 9 9 8 . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . 8 . . . 8 8 . . . 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PersonaRoja = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 4 4 4 4 4 4 2 . . . . 
    . . . . 2 4 2 4 4 2 4 2 . . . . 
    . . . . 2 4 4 4 4 4 4 2 . . . . 
    . . . . 2 4 4 2 2 4 4 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . 2 . . . 2 2 . . . 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(PersonaAzul, sprites.castle.tileGrass1)
tiles.placeOnRandomTile(PersonaRoja, sprites.castle.tileGrass1)
info.startCountdown(60)
