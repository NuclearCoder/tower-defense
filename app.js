"use strict";

requirejs.config({
    baseUrl: 'lib',
    paths: {
        jquery: 'jquery-3.3.1.min',
        jcanvas: 'jcanvas.min',
        game: "../game"
    }
});

requirejs(["game/main"]);
