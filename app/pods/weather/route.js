import Ember from 'ember';

export default Ember.Route.extend({
  model (slug) {
    console.log(slug);
  }
});
