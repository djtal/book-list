import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});

Book.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Becoming Steve Jobs', description: "Becoming Steve Jobs takes on and breaks down the existing myth and stereotypes about Steve Jobs. The conventional, one-dimensional view of Jobs is that he was half-genius, half-jerk from youth, an irascible and selfish leader who slighted friends and family alike. Becoming Steve Jobs answers the central question about the life and career of the Apple cofounder and CEO: How did a young man so reckless and arrogant that he was exiled from the company he founded become the most effective visionary business leader of our time, ultimately transforming the daily life of billions of people?" },
    { id: 2, title: 'Programming Ruby 2.0', description: "Ruby is the fastest growing and most exciting dynamic language out there. If you need to get working programs delivered fast, you should add Ruby to your toolbox.  This book is the only complete reference for both Ruby 1.9 and Ruby 2.0, the very latest version of Ruby.  2013 marks the 20th anniversary of the Ruby language. We're proud that throughout its history, we've continued to cover the latest version of Ruby.  Would you like to go from first idea to working code much, much faster? Do you currently spend more time satisfying the compiler instead of your clients or end users? Are you frustrated with demanding languages that seem to get in your way, instead of getting the work done? Are you using Rails, and want to dig deeper into the underlying Ruby language? If so, then we've got a language and book for you!" },
    { id: 3, title: 'Meta programing in Ruby 2.0', description: "Write powerful Ruby code that is easy to maintain and change. With metaprogramming, you can produce elegant, clean, and beautiful programs. Once the domain of expert Rubyists, metaprogramming is now accessible to programmers of all levels. This thoroughly revised and updated second edition of the bestselling Metaprogramming Ruby explains metaprogramming in a down-to-earth style and arms you with a practical toolbox that will help you write your best Ruby code ever." },
    { id: 4, title: 'Elixir', description: "You want to explore functional programming, but are put off by the academic feel (tell me about monads just one more time). You know you need concurrent applications, but also know these are almost impossible to get right. Meet Elixir, a functional, concurrent language built on the rock-solid Erlang VM. Elixir's pragmatic syntax and built-in support for metaprogramming will make you productive and keep you interested for the long haul. This book is the introduction to Elixir for experienced programmers.  Maybe you need something that's closer to Ruby, but with a battle-proven environment that's unrivaled for massive scalability, concurrency, distribution, and fault tolerance. Maybe the time is right for the Next Big Thing. Maybe it's Elixir." }
  ]
});

export default Book
