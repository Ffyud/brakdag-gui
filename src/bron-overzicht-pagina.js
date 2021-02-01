import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import BronPagina from './bron-pagina';

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
        <div>
          <div className="pagina-header">Overzicht van de bronnen</div>
          <div id='wrap'>
            <ul className='lijst'>
              {resultaten.map(item => (
                <li>
                  <ul className='lijst-item'>
                    <li className='bron'>
                        <Link to={"/bron/" + item['id']}>
                          <img alt={item['bron_title']} src={item['logo']} data-bron={item['bron_id']} />
                        </Link>
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
        </div>
      );
    }
  }
}

export default BronOverzichtPagina;