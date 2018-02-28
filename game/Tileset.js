define(require => class {
    constructor(data, onload) {
        this.count = data.count;
        this.width = data.width;
        this.height = data.height;
        this.cellsize = data.cellsize;
        this.name = data.name;

        this.image = new Image();
        this.image.onload = onload;
        this.image.src = "game/tileset/tile-" + data.name + ".png";

        this.at = Array(this.count).fill(0).map((_, id) => {
            let tx = id % data.width;
            let ty = Math.floor(id / data.height);

            return { x: tx * data.cellsize, y: ty * data.cellsize };
        });
    }
});