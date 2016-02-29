import Ember from 'ember';
import LazyImageMixin from 'ember-cli-image-lazy/mixins/lazy-image';
import { module, test } from 'qunit';

module('Unit | Mixin | lazy image');

// Replace this with your real tests.
test('it works', function(assert) {
  let LazyImageObject = Ember.Object.extend(LazyImageMixin);
  let subject = LazyImageObject.create();
  assert.ok(subject);
});
