define(require => {
    "use strict";

    require("jquery");
    require("jcanvas");

    let canvas = $("#game");
    let log = $("#game-log");

    let self;
    self = {
        canvas: canvas,
        log: log,

        init: function () {
            // layer 1: background
            canvas.addLayer({
                type: "rectangle",
                name: "background",
                fillStyle: "#fff",
                x: 0, y: 0, width: canvas.width(), height: canvas.height(),
                fromCenter: false
            })
            // layer 2: map tiles
            .addLayer({
                type: "function",
                name: "tiles",
                fn: self.drawTiles
            });
        },

        drawAll: function () {
            canvas.drawLayers();
        },

        drawTiles: function () {
            let map = self.map;
            let size = map.tileset.cellsize;

            let y = 0;
            map.cells.forEach(row => {
                let x = 0;
                row.forEach(cell => {
                    let tile = map.tileset.at[cell];

                    canvas.drawImage({
                        source: map.tileset.image,
                        x: x, y: y, width: size, height: size,
                        fromCenter: false,
                        sx: tile.x, sy: tile.y, sWidth: size, sHeight: size
                    });

                    x += size;
                });
                y += size;
            });
        }
    };

    return self;
});
