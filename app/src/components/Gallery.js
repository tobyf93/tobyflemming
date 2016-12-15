import React, { Component } from 'react';
import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillReceiveProps(props) {
    const items = props.images.map(image => ({
      src: image.url,
      w: image.width,
      h: image.height,
    }));

    this.setState({ items });
  }

  show() {
    const options = { index: 0, history: false, shareEl: false };
    const gallery = new PhotoSwipe(this.gallery, PhotoSwipeUIDefault, this.state.items, options);
    gallery.init();
  }

  render() {
    return (
      <div
        ref={(ref) => { this.gallery = ref; }}
        className="pswp"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="pswp__bg" />

        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button className="pswp__button pswp__button--close" title="Close (Esc)" />
              <button className="pswp__button pswp__button--share" title="Share" />
              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
              <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>

            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />

            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />

            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
