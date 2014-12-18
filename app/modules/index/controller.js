import Ember from 'ember';

export default Ember.Controller.extend({
        needs: "application",
        init: function() {
            this._super();
        },
        isOverViewCurrentRoute: function() {
            return this.get("controllers.application").get("currentRouteName") === "index.overview";
        }.property("controllers.application.currentRouteName"),
        isContactListCurrentRoute: function() {
            return ["contact.index", "contact"].contains(this.get("controllers.application").get("currentRouteName"));
        }.property("controllers.application.currentRouteName"),
        isContactFindCurrentRoute: function() {
            return ["contact.find", "contact.edit"].contains(this.get("controllers.application").get("currentRouteName"));
        }.property("controllers.application.currentRouteName"),
        isContactNewCurrentRoute: function() {
            return ["contact.new"].contains(this.get("controllers.application").get("currentRouteName"));
        }.property("controllers.application.currentRouteName"),
        actions: {
            test1: function() {
                alert(ApplicationController);
            }
        }
});
