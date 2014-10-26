import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('speakers', function() {
    this.route('show', {path: ':speaker_id'});
  });
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id'});
    this.route('new');
  });
});

export default Router;
