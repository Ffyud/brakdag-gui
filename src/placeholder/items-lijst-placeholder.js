import React, { Component } from 'react';

class ItemLijstPlaceholder extends Component {

  render() {
    return (
      <div id='wrap' className='wrap-fixed'>
        <ul className='lijst'>
            <li>
              <div className='lijst-item-placeholder'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder-small'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder-small'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder'><div className="lijst-item-logo-placeholder"></div></div>
              <div className='lijst-item-placeholder-small'><div className="lijst-item-logo-placeholder"></div></div>

            </li>
        </ul>
      </div>
    );
  }
}

export default ItemLijstPlaceholder;