import DS from 'ember-data';

export default DS.Model.extend({
        pid: DS.attr(),
        firstName: DS.attr(),
        lastName: DS.attr(),
        dateOfBirth: DS.attr(),
        email: DS.attr(),
        phone: DS.attr(),
        profileImageUrl: DS.attr(),
        
        fullName: function() {
            return this.get("firstName") + " " + this.get("lastName");
        }.property("firstName", "lastName")
  
});
