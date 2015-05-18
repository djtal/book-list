import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr('string')
});

Book.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Becoming Steve Jobs' },
    { id: 2, title: 'Programming Ruby 2.0' },
    { id: 3, title: 'Meta programing in Ruby 2.0' },
    { id: 4, title: 'Elixir' }
  ]
});

export default Book
