import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:1337',
    namespace: 'api/v1',
    modelType: null,
    
    pathForType: function(type) {
        if(Ember.isNone(this.get("modelType")))
            throw this + ".modelType is not set!!!";
//    var decamelized = Ember.String.decamelize(type);
//    var pluralized = Ember.String.pluralize(type);
//    return Ember.String.dasherize(pluralized);
    return this.get("modelType");
  }
});
