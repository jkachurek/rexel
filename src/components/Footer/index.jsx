import React from 'react';

import './Footer.scss';

import Button from '../Button';
import Icon from '../Icon';

import commentIcon from '../Icon/ic/black/ic_comment.png';

const Footer = () => (
  <div className="footer">
    <div>Support Center</div>
    <div className="footer-section">
      800-25-Platt
      <div className="footer-text-sm">
        800-257-5288 
      </div>
    </div>
    <div className="footer-section">
      <div>4 a.m. - 12 a.m. (pst)</div>
      <div>7 Days a week</div>
    </div>
    <div className="footer-section">
      <Button width="200px" color="tertiary">
        <div className="btn-contents">
          <img src={commentIcon} alt="comment"/>
          <span style={{ paddingLeft: '8px' }}>Live Help</span>
        </div>
      </Button>
    </div>
    <div className="footer-section footer-links">
      <a className="footer-link" href="#contact">Contact Us</a>
      <a className="footer-link" href="#new">What's New</a>
      <a className="footer-link" href="#faqs">FAQ's</a>
    </div>
  </div>
);

export default Footer;
