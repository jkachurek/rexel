import React from 'react';
import PropTypes from 'prop-types';

import './LinkPanel.scss';

import Panel from '../Panel';

const LinkPanel = ({
  label,
  img,
  href,
  width,
}) => (
  <Panel
    size="small"
    className="panel-padded link-panel"
    style={{ cursor: 'pointer' }}
  >
    <img
      src={img}
      alt={label}
      width={width}
      className="link-panel-img"
      onClick={() => console.log(`navigate to ${href}`)}
    />
    <div>
      {label}
    </div>
  </Panel>
);

LinkPanel.propTypes = {
  label: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
};

export default LinkPanel;
