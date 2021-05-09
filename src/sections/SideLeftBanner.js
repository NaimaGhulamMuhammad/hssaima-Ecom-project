import React from 'react';
import A from '../images/cat-women.jpg'

function SideLeftBanner () {
  return(
    <>
      <div className="collection-header">
        <div className="collection-hero">
              <div className="collection-hero__image">
                <img className="blur-up lazyload" data-src={A} src={A} alt="Women" title="Women"/>
              </div>
              <div className="collection-hero__title-wrapper">
                <h1 className="collection-hero__title page-width">Shop Left Sidebar</h1>
              </div>
            </div>
      </div>
    </>
  );
};
export default SideLeftBanner