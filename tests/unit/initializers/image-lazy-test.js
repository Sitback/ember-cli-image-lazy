import Ember from 'ember';
import ImageLazyInitializer from '../../../initializers/image-lazy';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | image lazy', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ImageLazyInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
