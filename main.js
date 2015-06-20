require.config({
    app_name: 'ARTIST',
    paths: {
        // jquery
        jquery: 'js/jquery.min',
        // twitter Boostrap (cdn)
        bootstrap: 'js/bootstrap.min',
        
        text: 'js/text',
       
        // Backbone / Marionette
        underscore: 'js/underscore',
       
        // Swig Templating Engine
        swig: 'js/swig.min',

        init: 'js/main',
        templateLoader: 'js/templateLoader', 
        checkMobile: 'js/checkMobile'
    },
    // shim makes define headers nicer...
    shim: {
        jquery: {
            exports: 'jquery'
        },
        swig: {
            deps: ['jquery', 'underscore']
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        init: {
            deps: ['swig', 'bootstrap']
        },
        templateLoader: {
            deps: ['swig', 'bootstrap']
        },
        checkMobile: {
            deps: ['swig', 'bootstrap']
        }

    }
});

define(['init'], function(Init) {
    Init();
})
