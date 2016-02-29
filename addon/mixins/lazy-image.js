import Ember from 'ember';
import InViewport from './in-viewport';

/**
 * A mixin for Ember image views to load them only
 * when they are scrolled into the viewport.
 * @class LazyImage
 * @uses InViewport
 * @public
 */
export default Ember.Mixin.create(InViewport, {
  /**
   * @override
   * @public
  */
  loadImageOnInsert: null,

  /**
   * @private
  */
  _loadImageOnEnterView: Ember.observer('didEnterViewport', function() {
    if (this.get('didEnterViewport')) {
      Ember.run.scheduleOnce('afterRender', this, this.loadImage);
    }
  })
});
