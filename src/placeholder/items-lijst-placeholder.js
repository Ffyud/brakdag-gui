import React, { Component } from 'react';

class ItemLijstPlaceholder extends Component {

  render() {
    return (
      <div id='wrap'>
        <ul className='lijst'>
            <li>
              <div className='lijst-item-placeholder'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder-small opac-8'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder opac-7'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder opac-6'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder-small opac-5'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder opac-3'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder-small opac-2'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder-small opac-1'><div className="lijst-item-logo-placeholder"></div></div>

            </li>
        </ul>
      </div>
    );
  }
}

export default ItemLijstPlaceholder;