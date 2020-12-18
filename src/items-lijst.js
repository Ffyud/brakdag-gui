import React, { Component } from 'react';

class ItemLijst extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  render() {
    const { error, isLoaded } = this.state;
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
                </li>
                <li className='description'>
                  {item['description'].split(". ", 1)}

                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemLijst;