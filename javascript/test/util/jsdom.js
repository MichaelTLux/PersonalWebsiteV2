(function () {
    'use strict';

    var jsdom = require('jsdom'),
        baseHTML,
        window;

    if (!global.window) {
        baseHTML = '<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>Tests</title></head><body></body></html>';
        window = jsdom.jsdom(baseHTML).defaultView;

        global.window = Object.assign({}, window, {
            location: '',
            alert: function () {},
            open: function () {},
            setInterval: function () {},
            clearInterval: function () {},
            close: function () {},
            componentHandler: {
                upgradeDom: function () {},
                upgradeElement: function () {}
            }
        });
        global.document = window.document;
        global.navigator = window.navigator;
    }

}());