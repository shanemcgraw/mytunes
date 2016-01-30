// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

    events: {
      'add': function() {
        debugger;
        this.models.playFirst();
      }
    },
  
  initialize: function() {
    debugger;
    this.models.on('add', function() {
      debugger;
    }, this);
  },

  render: function() {
    return this.$el;
  }

});
