define(require => {
    "use strict";

    return class {
        constructor(data, x, y) {
            this.type = data.type;
            this.speed = data.speed;
            this.orien = data.orien;

            this.x = x;
            this.y = y;
        }

        forward(map) {
            // Moves one time unit on the path
            
        }
    }
});
