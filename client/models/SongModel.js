// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue() {
    this.trigger('enqueue', this);
  },

  dequeue() {
    this.trigger('dequeue', this);
  },

  ended() {
    this.trigger('ended', this);
  }
});
