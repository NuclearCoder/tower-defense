define(function (require) {
    require('jquery');
    require('jcanvas');
    let Map = require('./Map');

    let canvas = $('#game');
    let log = $('#game-log');

    let self = {
        canvas: canvas,
        log: log,

        init: function () {
            // layer 1: background
            canvas.addLayer({
                type: 'rectangle',
                name: 'background',
                fillStyle: '#fff',
                x: 0, y: 0, width: canvas.width(), height: canvas.height(),
                fromCenter: false
            })
            // layer 2: map tiles
            .addLayer({
                type: 'function',
                name: 'tiles',
                fn: self.drawTiles
            });
        },

        drawAll: function () {
            canvas.drawLayers();
        },

        drawTiles: function () {
            let map = self.map;
            let size = map.tileset.cell;

            for (let ty = 0, y = 0; ty < map.height; ++ty, y += size) {
                for (let tx = 0, x = 0; tx < map.width; ++tx, x += size) {
                    let cell = map.at(tx, ty);
                    let tile = map.tileset.at(cell);

                    canvas.drawImage({
                        source: map.tileset.image,
                        x: x, y: y,
                        width: size, height: size,
                        fromCenter: false,
                        sx: tile.x, sy: tile.y,
                        sWidth: size, sHeight: size
                    });
                }
            }
        }

    };

    return self;
});
