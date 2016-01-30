// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize () {
    // console.log(this);
    // debugger;
  },

  playFirst () {
    _.first(this.models).play();
  }

});