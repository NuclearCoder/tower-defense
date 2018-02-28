define(require => {
    "use strict";

    require("jquery");
    let Render = require("./Render");

    return {
        log: function (msg) {
            Render.log.append(msg).append("<br/>");
        }
    };
});
