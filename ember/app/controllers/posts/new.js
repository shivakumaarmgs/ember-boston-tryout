import Ember from "ember";
export default Ember.ObjectController.extend({
	isEditing: false,

	edit: function() {
		this.set('isEditing', true);
	},

	doneEditing: function() {
		this.set('isEditing', false);
    var post = this.store.createRecord('post', {
      title: this.get('title'),
      body: this.get('body')
    });
    post.save();
	}
});
