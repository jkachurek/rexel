import React from 'react';

import './PlattPlusPanel.scss';

import plattPlus from '../../content/img/platt-plus.png';
import Panel from '../../components/Panel';
import Button from '../../components/Button';

const PlattPlusPanel = () => (
  <Panel className="platt-plus panel-padded nonmobile-priority" size="large">
    <img src={plattPlus} alt="Platt Plus" />
    <div style={{ padding: '25px' }}>
      <div style={{ paddingBottom: '8px'}}>
        <div style={{ fontSize: '1.2em'}}>Get Started Today</div>
        <div>
          Become a
          <span className="platt-green-text"> Platt Plus </span>
          Member.  
        </div>
      </div>
      <Button
        color="secondary"
        text="Learn More"
        onClick={() => console.log('Wow, now you\'re a Platt Plus member!')}
      />
    </div>
  </Panel>
);

export default PlattPlusPanel;
