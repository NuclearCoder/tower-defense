define(function(require) {
    require('jquery');
    let Util = require('./Util');
    let Map = require('./Map');
    let Render = require('./Render');
    
    return {
        start: function() {
            let map = new Map({
                width: 3,
                height: 3,
                cells: [
                    [1, 2, 2],
                    [1, 1, 1],
                    [2, 2, 1]
                ],
                tileset: {
                    name: 'A',
                    count: 3,
                    width: 2,
                    height: 2,
                    cell: 16
                }
            });

            Render.map = map;
            Render.drawAll();

            Util.log('Game started.');
        }
    };
});

