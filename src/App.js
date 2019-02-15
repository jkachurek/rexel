import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import NavMenu from './components/NavMenu';
import BadgeButtonDrawer from './components/BadgeButtonDrawer';
import ThumbnailGallery from './components/ThumbnailGallery';
import PanelGallery from './components/PanelGallery';
import Panel from './components/Panel';

import badgeButtons from './data/badgeButtons';
import thumbnails from './data/thumbnails';

import dealBanner from './content/panel/deal.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-contents">
          <NavMenu />
          <BadgeButtonDrawer badgeButtons={badgeButtons} />
          <ThumbnailGallery
            title="Product Markets"
            thumbnails={thumbnails}
          />
          <PanelGallery>
            <div style={{display: 'flex', flexFlow: 'row wrap', width: '100%'}}>
            <Panel size="medium">
              <img src={dealBanner} alt="Today's Deals" />
              Today's Deals
            </Panel>
            <Panel size="large" className="nonmobile-priority">
              Get Started Today
            </Panel>
            <Panel size="medium">
              Recently Viewed
            </Panel>
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', width: '100%'}}>
            <Panel size="small">
              Super Tool Day
            </Panel>
            <Panel size="small">
              Branch Locations
            </Panel>
            <Panel size="small">
              Help Center
            </Panel>
            <Panel size="small">
              Platt University
            </Panel>
            </div>
            <div style={{display: 'flex', width: '100%'}}>
              <Panel size="large">
                Shop Better, download the Platt App today
              </Panel>
            </div>
          </PanelGallery>
        </div>
      </div>
    );
  }
}

export default App;
