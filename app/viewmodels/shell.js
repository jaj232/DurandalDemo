define(['plugins/router', 'durandal/app','knockout'], function (router,app,ko) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'login', moduleId: 'viewmodels/login', nav: false },
				{ route: 'incidents', moduleId: 'viewmodels/incidents', nav: false }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});