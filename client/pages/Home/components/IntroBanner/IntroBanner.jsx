import React, { Component } from 'react';

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
        <img
          className="intro-banner-img"
          src={require('./images/TB1R9Ius1uSBuNjy1XcXXcYjFXa-3840-900.jpg')}
          style={style.introBannerImgStyles}
          alt=""
        />
        <div
          className="intro-banner-img-mask"
          style={style.introBannerImgMaskStyles}
        />
        <div className="intro-banner-text" style={style.introBannerTextStyles}>
          <h2
            className="intro-banner-title"
            style={style.introBannerTitleStyles}
          >
            智慧药房，提升工作
          </h2>
          <p
            className="intro-banner-subtitle"
            style={style.introBannerSubtitleStyles}
          >
            智慧药房系统是院内HIS系统药房子系统的一个延伸。它基于物联网技术、pda技术实现对药品实物的管理， 并通过智能提醒辅助药房药师的日常工作、提升工作效率、降低工作失误率。通过物联网技术可以实现传统软件无法实现的数量核对、一键盘点、药品追踪等功能。系统涵盖了门急诊药房和住院药房业务，实现库存智能盘点、发药智能提醒、发药药品种类和数量的核对，并优化门诊药房的发药流程，减少患者排队情况
          </p>
        </div>
      </div>
    );
  }
}

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '1920px',
    height: '100%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  introBannerImgMaskStyles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: '#000',
    opacity: '.45',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'relative',
    zIndex: '99',
    width: '1200px',
    color: '#fff',
  },
  introBannerTitleStyles: {
    fontWeight: '400',
    fontSize: '50px',
    lineHeight: '70px',
  },
  introBannerSubtitleStyles: {
    marginTop: '8px',
    marginBottom: '48px',
    maxWidth: '768px',
    fontSize: '16px',
    lineHeight: '25px',
  },
};
