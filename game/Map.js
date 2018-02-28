define(require => {
    let Tileset = require('./Tileset');

    return class {
        constructor(data, onload) {
            this.width = data.width;
            this.height = data.height;
            this.cells = data.cells;
            this.tileset = new Tileset(data.tileset, onload);
        }
    };
});
