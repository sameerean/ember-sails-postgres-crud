import Ember from 'ember';

var globalProps = Ember.Object.create({
    appName: "Ember-Sails Postgres CRUD web-app"
});

export function globalProp(input, options) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> options = " + JSON.stringify(options.hash));
  return globalProps.get(input);
}

export default Ember.Handlebars.makeBoundHelper(globalProp);
