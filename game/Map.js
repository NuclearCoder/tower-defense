define(['game/Util'], function (Util) {
    return class Map {
        /**
         * data: L'objet JSON renvoyé par une requête au serveur.
         */
        constructor(data, load) {
            this.width = data.width;
            this.height = data.height;
            this.cells = data.cells;
            this.tileset = data.tileset;

            /**
             * Renvoie les coordonnées du tile dans le tileset.
             * id: Le numéro du tile qu'il faut trouver
             */
            let tileset = this.tileset;
            tileset.at = function (id) {
                let x, y;
                if (id < 0 || id >= tileset.count) {
                    x = y = 0;
                } else {
                    x = id % tileset.width;
                    y = Math.floor(id / tileset.width);
                }

                let size = tileset.cell;

                return {x: size * x, y: size * y};
            };

            let image = new Image();
            image.onload = load;
            image.src = "game/tileset/tile-" + tileset.name + ".png";

            tileset.image = image;
        }

        /**
         * Renvoie la valeur de la cellule en (x;y)
         * x, y: Les coordonnées de la cellule
         */
        at(x, y) {
            return this.cells[y][x];
        }
    }
});
