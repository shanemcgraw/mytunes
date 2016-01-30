// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({




  model: SongModel,

  // does this need a 'play' state?
  // this should listen for 'play' events on its Models (SongModel. SongView? LibraryEntryView?)
});