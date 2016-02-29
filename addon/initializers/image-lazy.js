import StatefulImg from 'ember-cli-image/components/stateful-img';
import BackgroundImage from 'ember-cli-image/components/background-image';
import LazyImage from 'ember-cli-image-lazy/mixins/lazy-image';

export function initialize(/* application */) {
  let hasDOM = typeof document !== 'undefined';

  if (typeof StatefulImg.enableLazyLoading === 'undefined') {
    StatefulImg.reopenClass({
      enableLazyLoading: hasDOM
    });
  }
  if (typeof BackgroundImage.enableLazyLoading === 'undefined') {
    BackgroundImage.reopenClass({
      enableLazyLoading: hasDOM
    });
  }

  if (StatefulImg.enableLazyLoading) {
    StatefulImg.reopen(LazyImage);
  }
  if (BackgroundImage.enableLazyLoading) {
    BackgroundImage.reopen(LazyImage);
  }
}

export default {
  name: 'image-lazy',
  initialize
};
