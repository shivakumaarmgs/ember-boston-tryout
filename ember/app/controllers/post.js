import Ember from "ember";
export default Ember.ObjectController.extend({
	addComment: function() {
    var comment = this.store.createRecord('comment', {
      body: this.get('commentbody'),
      post: this.get('model')
    });
    comment.save();
    this.set('commentbody', '');
	}
});
