// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize () {
    this.on('add', () => {
      if(this.length === 1) {
        this.playFirst();
      }
    }, this);

    // this.on('ended', () => {
    //   this.remove(this.at(0));
    //   if(this.length >= 1){
    //     this.playFirst();
    //   }
    // }, this);

    this.on('dequeue', (song) => {
      this.remove(song); //this is what we need
      this.playFirst();
    }, this);
  },



  playFirst () {
    if(this.length){
      this.at(0).play();
    }else{
      this.trigger('outtaSongs', this);
    }
  },

  // playNext () {
  //   this.shift();
  //   this.playFirst();
  // }

});