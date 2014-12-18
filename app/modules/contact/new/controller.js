import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        save: function() {
            console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> model " + this.get("model"));
            console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> firstName " + this.get("model").get("firstName"));
            this.get('model').set('creationDate', new Date());
//            var newContact = this.store.createRecord("contact", this.get("model"));
            this.get('model').save();
            this.transitionToRoute("contact");
        }
    }
});
