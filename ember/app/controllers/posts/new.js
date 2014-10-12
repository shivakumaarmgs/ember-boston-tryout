import Ember from "ember";
export default Ember.ObjectController.extend({
	isEditing: false,

	edit: function() {
		this.set('isEditing', true);
	},

	doneEditing: function() {
		this.set('isEditing', false);
    console.log(this.get('title'));
    var title = this.get('title');
    var body = this.get('body');
    var post = this.store.createRecord('post', {
      title: title,
      body: body
    });
    post.save();
	}
});
