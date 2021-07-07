import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import BronPagina from './bron-pagina';
import ServerFoutPlaceholder from './placeholder/server-fout-placeholder.js';

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
    fetch(process.env.REACT_APP_BRAKDAGFLASK + "/items/statistics", requestOptions)
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
      return <div><ServerFoutPlaceholder message={error.message} /></div>;
    } else if (!isLoaded) {
      return <div><ItemsLijstPlaceholder /></div>;
    } else {
      return (
        <div>
          <header className="pagina-header">
            Nieuwsbronnen
            <span className="pagina-header-sub">{resultaten.length} bronnen</span>
          </header>
          <div id='wrap'>
            <ul className='lijst'>
              {resultaten.map(item => (
                <li key={item['id']}>
                  <Link to={"/bron/" + item['id']}>
                    <ul className='lijst-item'>
                      <li className='bron'>
                            <img alt={item['bron_title']} src={item['logo']} data-bron={item['bron_id']} />
                      </li>
                      <li className='title'>
                        <a className='title-ref' target="blank" href={item['link_home']}>{item['title']}</a>
                        <div className='description'>
                          {item['description']}
                        </div>
                      </li>
                      <li className='right'>
                        <div className='whats-the-count'>{item['aantal_items']} artikelen</div>
                      </li>
                    </ul>
                  </Link>
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