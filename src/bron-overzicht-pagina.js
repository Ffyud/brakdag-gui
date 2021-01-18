import React, { Component } from 'react';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';

class BronOverzichtPagina extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      resultaten: []
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch("http://127.0.0.1:5000/items/statistics", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('bronnen geladen lol')
          this.setState({
            isLoaded: true,
            resultaten: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { resultaten, isLoaded, error } = this.state;

    if (error) {
      return <div>Niet goed gegaan: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><ItemsLijstPlaceholder /></div>;
    } else {
      return (
        <div id='wrap'>
          <ul className='lijst'>
            {resultaten.map(item => (
              <li>
                <ul className='lijst-item'>
                  <li className='bron'>
                    <img alt={item['bron_title']} src={item['logo']} data-bron={item['bron_id']} />
                  </li>
                  <li className='title'>
                    <a target="blank" href={item['link_home']}>{item['title']}</a>
                    <div className='description'>
                      {item['description']}
                    </div>
                  </li>
                  <li className='right'>
                    <div className='whats-the-count'>{item['aantal_items']} artikelen</div>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default BronOverzichtPagina;