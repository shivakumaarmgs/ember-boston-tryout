import Ember from "ember";
export default Ember.ObjectController.extend({
	isEditing: false,

	edit: function() {
		this.set('isEditing', true);
	},

	doneEditing: function() {
		this.set('isEditing', false);
    var title = this.get('title');
    var presentation = this.store.createRecord('presentation', {
      title: title,
      speaker: this.get('model')
    });
    presentation.save();
	}
});
