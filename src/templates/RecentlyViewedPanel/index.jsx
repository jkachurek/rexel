import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../components/Panel';

const RecentlyViewedPanel = ({ items }) => (
  <Panel size="medium" className="panel-padded">
      <div className="flex-spread-between">
        <span>Recently Viewed</span>
        <a href="#viewAll" className="link">View All</a>
      </div>
      <div className="flex-spread-around">
        {items.map((item, index) => (
          <div key={index}>
          <img
            className="thumb-small img-bounce"
            src={item.img}
            alt={item.alt}
            title={item.alt}
            onClick={() => console.log(`navigate to ${item.href}`)}
            style={{ cursor: 'pointer' }}
          />
          </div>
        ))}
      </div>
  </Panel>
);

RecentlyViewedPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
  })),
};

RecentlyViewedPanel.defaultProps = {
  items: [],
};

export default RecentlyViewedPanel;
