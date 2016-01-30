// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",

  initialize () {
    this.render();
    this.collection.on('add', function() { 
      this.render(); 
    }, this);
    this.collection.on('dequeue', function(){
      this.render();
    }, this);
  },

  events: {
    'add': function() {
      debugger;
      this.render();
      // this.model.enqueue();
    },
    'dequeue': function() {
      this.render();
      // this.model.enqueue();
    }
  },

  // How does this know to call render() after .add and .pop are called?

  render() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
