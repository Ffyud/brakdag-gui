import React, { Component } from 'react';

class ItemsLijst extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  render() {
    const { items } = this.props;
    return (
      <div id='wrap'>
        <ul className='lijst'>
          {items.map(item => (
            <li key={item['id']}>
              <ul className='lijst-item'>
                <li className='bron'>
                  <img alt={item['bron_title']} src={item['logo']} />
                </li>
                <li className='title'>
                  <a target="blank" href={item['link']}>
                    {item['title']}
                  </a>
                  <div className='description'>
                    {item['description'].split(". ", 1)}
                  </div>
                </li>
                {/* <li className='description'>
                  {item['description'].split(". ", 1)}
                </li> */}
                {/* <li className='options'><i class="ri-arrow-up-line"></i><br/><i class="ri-share-box-line"></i></li> */}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsLijst;