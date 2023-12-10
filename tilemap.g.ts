// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010201020201020201020201020102010102010102010202020202010201020201020102020102010201010102010201010201020202020102020202020102010102020202020201020201010101020101010101010102010202020202020201010201010202020101010201010101010102020202020202020102020102020101020101010101010201020202010201010202020202010202010202020202010102010102020101010102020101010101020201020201020202020202020201010101010102010101010101010202010202020202020102020202020202020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . 2 . . 2 . . 2 . 2 . 2 
2 . 2 2 . 2 . . . . . 2 . 2 . . 
2 . 2 . . 2 . 2 . 2 2 2 . 2 . 2 
2 . 2 . . . . 2 . . . . . 2 . 2 
2 . . . . . . 2 . . 2 2 2 2 . 2 
2 2 2 2 2 2 . 2 . . . . . . . 2 
2 . 2 2 . . . 2 2 2 . 2 2 2 2 2 
2 . . . . . . . . 2 . . 2 . . 2 
2 . 2 2 2 2 2 2 . 2 . . . 2 . 2 
2 . . . . . 2 . . 2 . . . . . 2 
2 . 2 2 . . 2 2 2 2 . . 2 2 2 2 
2 . . 2 . . 2 . . . . . . . . 2 
2 2 2 2 2 . 2 2 2 2 2 2 2 . . 2 
. . . . . . 2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
