define(require => {
    "use strict";

    return class {
        constructor(data) {
            this.type = data.type;
            this.radius = data.radius;
        }
    };
});
