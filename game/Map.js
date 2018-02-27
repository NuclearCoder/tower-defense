define(['game/Util'], function(Util) {
    return class Map {
        /**
         * data: L'objet JSON renvoyé par une requête au serveur.
         */
        constructor(data) {
            Object.assign(this, data);
            
            /**
             * Renvoie les coordonnées du tile dans le tileset.
             * id: Le numéro du tile qu'il faut trouver
             */
            data.tileset.at = function(id) {
                var x, y;
                if (id < 0 || id >= this.tileset.count) {
                    x = y = 0;
                } else {
                    x = id % this.tileset.width;
                    y = id / this.tileset.width;
                }

                let size = this.tileset.cell;

                return {
                    x: size * x, y: size * y, width: size, height: size
                };
            }
        }
        
        /**
         * Renvoie la valeur de la cellule en (x;y)
         * x, y: Les coordonnées de la cellule
         */
        at(x, y) {
            return cells[y][x];
        }
    }
});
