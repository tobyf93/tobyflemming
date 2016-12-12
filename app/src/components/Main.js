import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoSwipe from 'photoswipe/dist/photoswipe.js';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default.js';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

class Main extends Component {
  componentDidMount() {
    const items = [
      {
        src: 'http://lorempixel.com/g/400/200/',
        w: 400,
        h: 200
      },
      {
        src: 'http://lorempixel.com/g/500/200/',
        w: 500,
        h: 200
      }
    ];

    var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

    var gallery = new PhotoSwipe(this.refs.gallery, PhotoSwipeUIDefault, items, options);
    console.log(this.refs.gallery, items, options);
    gallery.init();
  }

  render() {
    return (
      <div ref="gallery" className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="pswp__bg"></div>

          <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                  <div className="pswp__item"></div>
                  <div className="pswp__item"></div>
                  <div className="pswp__item"></div>
              </div>

              <div className="pswp__ui pswp__ui--hidden">
                  <div className="pswp__top-bar">
                      <div className="pswp__counter"></div>
                      <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                      <button className="pswp__button pswp__button--share" title="Share"></button>
                      <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                      <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                      <div className="pswp__preloader">
                          <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                              <div className="pswp__preloader__donut"></div>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                      <div className="pswp__share-tooltip"></div>
                  </div>

                  <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                  </button>

                  <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                  </button>

                  <div className="pswp__caption">
                      <div className="pswp__caption__center"></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default connect((state) => state)(Main);
