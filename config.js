/// <reference path="interfaces/lib/requirejs/require.d.ts" />
var require = {
    baseUrl: "/assets/scripts",
    paths: {
        "jquery": "lib/jquery.min",
        "JSON": "lib/json2",
        "domReady": "lib/domReady",
        "Hammer": "lib/jquery.hammer-full.min",
        "waypoints": "lib/waypoints.min",
        "handlebars": "lib/handlebars.runtime",
        "jQuery.tinyPubSub": "lib/ba-tiny-pubsub",
        "jQuery.mousewheel": "lib/jquery.mousewheel",
        //"jQuery.mockjax": "lib/jquery.mockjax",
        "jQuery.placeholder": "lib/jquery.placeholder",
	    "select2": "lib/select2.min",
        //extend
        "uplay": "https://static2.cdn.ubi.com/uplay-connect/v2/live/default/js/uplay_sdk.1.0.min",
        "easyXDM": "https://static2.cdn.ubi.com/uplay-connect/v2/live/default/js/easyXDM.min"
    },
    deps: ["jquery", "Hammer", "jQuery.tinyPubSub"],
    shim: {
        jquery: {
            exports: '$'
        },
        "Hammer": {
            deps: ["jquery"]
        },
        "jQuery.tinyPubSub": {
            deps: ["jquery"]
        },
        "jQuery.transit": {
            deps: ["jquery"]
        },
        "select2": {
            deps: ["jquery"]
        },
        "handlebars": {
            deps: [""],
            exports: 'Handlebars',
            init: function() {
                this.Handlebars = Handlebars;
                this.Handlebars.registerHelper('ifeq', function(a, b, options) {
                    if( a == b ) { return options.fn(this); }
                });
                return this.Handlebars;
            }
        },
        "modules/Game": {
            deps: ["jquery", "waypoints", "jQuery.scrollTo"]
        },
        "main": {
            deps: ["jquery"]
        },
        "uplay": { deps: ["easyXDM"], exports: "uplay" }
    },
    callback: function ($, Hammer, TinyPubSub, Transit, Easing) {
    },
    waitSeconds: 30
};