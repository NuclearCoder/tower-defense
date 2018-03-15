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

        init: function (map) {
            self.map = map;
            self.size = map.tileset.cellsize;
            self.turrets = [];
            self.mobs = [];

            /* possible layer groups:
             * "start" that is only drawn once on start
             * "map" that is the map's background, tiles...
             * "turrets" that is the turrets placed on the map
             * "mobs" that is the mobs currently on the map
             */

            // start layers
            canvas.addLayer({
                type: "rectangle",
                name: "background",
                groups: ["start"],
                fillStyle: "#fff",
                x: 0, y: 0, width: canvas.width(), height: canvas.height(),
                fromCenter: false
            });

            // map layers
            let y = 0;
            map.cells.forEach(row => {
                let x = 0;
                row.forEach(cell => {
                    let tile = map.tileset.at[cell];

                    canvas.addLayer({
                        type: "image",
                        name: `map_${x}x${y}`,
                        groups: ["start", "map"],
                        source: `game/tileset/tile-${map.tileset.name}.png`,
                        x: x, y: y, width: self.size, height: self.size,
                        fromCenter: false,
                        sx: tile.x, sy: tile.y, sWidth: self.size, sHeight: self.size
                    });

                    x += self.size;
                });
                y += self.size;
            });
        },

        drawAll: function () {
            canvas.drawLayers();
        },

        addTurret: function (turret, id, x, y) {
            let tx = x * self.size;
            let ty = y * self.size;

            canvas.addLayer({
                type: "image",
                name: `turret_${id}`,
                groups: ["turrets"],
                source: `game/turrets/turret-${turret.type}.png`,
                x: tx, y: ty, width: self.size, height: self.size,
                fromCenter: false,
                data: turret
            });
        },

        addMob: function (mob, id, x, y) {
            let tx = x * self.size;
            let ty = y * self.size;

            canvas.addLayer({
                type: "image",
                name: `mob_${id}`,
                groups: ["mobs"],
                source: `game/mobs/mob-${mob.type}.png`,
                x: tx, y: ty, width: self.size, height: self.size,
                fromCenter: false,
                data: mob
            });
        },

        removeTurret: function (id) {
            canvas.removeLayer(`turret_${id}`);
        },

        removeMob: function (id) {
            canvas.removeLayer(`mob_${id}`);
        }
    };

    return self;
});
