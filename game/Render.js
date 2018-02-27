define(function(require) {
    require(['jquery', 'jcanvas']);
    let Map = require('./Map');

    let canvas = $('#game');
    let log = $('#game-log');

    let self = {
        canvas: canvas,
        log: log,

        init: function() {
            // layer 1: background
            canvas.addLayer({
                type: 'rectangle',
                fillStyle: '#fff',
                x: 0, y: 0, width: canvas.width, height: canvas.height
            });
            // layer 2: border
            canvas.addLayer({
                type: 'rectangle',
                strokeStyle: '#000',
                x: 0, y: 0, width: canvas.width, height: canvas.height
            });
            // layer 3: map tiles
            canvas.addLayer({
                type: 'function',
                name: 'tiles',
                fn: self.drawTiles
            });
        },

        drawAll: function() {
            canvas.drawLayers();
        },

        drawTiles: function(ctx) {
            let map = self.map;
            let tileset = map.tileset;
            let path = 'tileset/tile-' + tileset.name + '.png';
            
            for (let y = 0; y < map.height; ++y) {
                for (let x = 0; x < map.width; ++x) {
                    let cell = map.at(x, y);
                    let tile = tileset.at(cell);
                    
                    ctx.drawImage(path, tile.x, tile.y, tile.width, tile.height);
                }
            }
        }
        
    }

    return self;
});
