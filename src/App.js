import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import NavMenu from './components/NavMenu';
import BadgeButtonDrawer from './components/BadgeButtonDrawer';
import ThumbnailGallery from './components/ThumbnailGallery';
import PanelGallery from './components/PanelGallery';
import Panel from './components/Panel';
import LinkPanel from './components/LinkPanel';
import ImageSwitch from './components/ImageSwitch';
import PanelSetWrapper from './components/PanelSetWrapper';
import Footer from './components/Footer';

import RecentlyViewedPanel from './templates/RecentlyViewedPanel';
import PlattPlusPanel from './templates/PlattPlusPanel';

import badgeButtons from './data/badgeButtons';
import thumbnails from './data/thumbnails';
import recentlyViewed from './data/recentlyViewed';
import linkPanels from './data/linkPanels';

import dealBanner from './content/panel/deal.png';
import appBanner from './content/panel/app-get-banner.png';
import appBannerMobile from './content/panel/app-get-banner-mobile.png';

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
            <PanelSetWrapper>
              <Panel size="medium">
                <img
                  src={dealBanner}
                  alt="Today's Deals"
                  className="img-responsive"
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log('navigate to today\'s deals')}
                />
              </Panel>
              <PlattPlusPanel />
              <RecentlyViewedPanel items={recentlyViewed} />
            </PanelSetWrapper>
            <PanelSetWrapper>
              {linkPanels.map((lp, i) => <LinkPanel {...lp} key={i} />)}
            </PanelSetWrapper>
            <PanelSetWrapper>
              <Panel size="large">
                <ImageSwitch
                  mobileImg={appBannerMobile}
                  nonmobileImg={appBanner}
                  alt="Platt App"
                  className="img-responsive"
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log('Get the app!')}
                />
                <div style={{ padding: '10px 0px' }}>
                  Shop Better, download the Platt App today
                </div>
              </Panel>
            </PanelSetWrapper>
          </PanelGallery>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
