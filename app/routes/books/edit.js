import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var books = this.modelFor('books');
    return(books.findBy('id', params.id));
  },
  actions: {
    cancel: function() {
      this.transitionTo('books.book', this.get('controller.model'));
    }
  }
});
