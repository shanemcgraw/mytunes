// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",

  initialize () {
    this.render();
    this.collection.on('add dequeue', this.render, this);
  },

  render() {
    this.$el.attr('id','queue');
    this.$el.children().detach();

    this.$el.html('<th colspan="2">Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

