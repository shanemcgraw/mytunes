// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize () {
    this.on('add', function(song) {
      this.playFirst();
    }, this);
    // console.log(this);
    // debugger;
    // this.on.('change:length', this.playFirst, this);
  },

  // listen for when a song is added && the 'length' of songQueue is === 1
    // call 'playFirst()'
  

  playFirst () {
    _.first(this.models).play();
  }

});