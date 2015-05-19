import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createBook: function() {
      var controller = this.get('controller');
      var title = controller.get('title');
      var description = controller.get('description');
      var book = this.get('store').createRecord('book', { title: title, description, description });
      book.save().then(function(book) {
        controller.set('title', '');
        controller.set('description', '');
        controller.transitionTo('books.book', book)
      })
    }
  }
});
