import Ember from 'ember';

export default Ember.ArrayController.extend({
  count: function() {
    return(this.get("model").get('length'));
  }.property('model')
});
