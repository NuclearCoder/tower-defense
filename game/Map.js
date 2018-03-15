define(require => {
    "use strict";

    let Tileset = require('./Tileset');

    return class {
        constructor(data) {
            this.width = data.width;
            this.height = data.height;
            this.cells = data.cells;
            this.tileset = new Tileset(data.tileset);
        }
        
        at(x, y) {
            if ((x < 0 || x >= width)
                    || (y < 0 || y >= height))
                return 0;
            return this.cells[y][x];
        }
    };
});
