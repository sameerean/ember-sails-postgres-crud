import Ember from 'ember';
        import config from './config/environment';
        var Router = Ember.Router.extend({
            location: config.locationType
        });

Router.map(function () {
    this.resource('index', {path: "/"}, function () {
        this.route('overview');
                this.resource('contact', {path: "contact"}, function () {
                    this.route('find');
                    this.route('new');
                    this.route('edit', {path: "edit/:pid"});
                });
    });
});

export default Router;
