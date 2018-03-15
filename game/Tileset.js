define(require => {
    "use strict";

    return class {
        constructor(data) {
            this.count = data.count;
            this.width = data.width;
            this.height = data.height;
            this.cellsize = data.cellsize;
            this.name = data.name;

            this.at = Array(this.count).fill(0).map((_, id) => {
                let tx = id % data.width;
                let ty = Math.floor(id / data.height);

                return { x: tx * data.cellsize, y: ty * data.cellsize };
            });
        }
    }
});
