import React, { Component } from 'react';
import ItemLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import {
  BrowserRouter as
    Link
} from 'react-router-dom';

class ItemsPagina extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    let item = this.props.match.params.itemId;

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    // TODO endpoint toevoegen
    fetch(`` + process.env.REACT_APP_BRAKDAGFLASK + `/items/${item}`, requestOptions)
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
    const { error, isLoaded, resultaten } = this.state;
    if (error || !isLoaded || resultaten.length === 0) {
      return <div><ItemLijstPlaceholder /></div>;
    } else {
      return (
        <div>
          <div className="pagina-header">Artikel</div>
          <div id='wrap'>
            <ul className='lijst'>
              {resultaten.map(item => (
                <li key={item['id']}>
                  <ul className='lijst-item'>
                    <li className='bron'>
                      <Link to={"/bron/" + item['bron_id']}>
                        <img alt={item['bron_title']} src={item['logo']} data-bron={item['bron_id']} />
                      </Link>
                    </li>
                    <li className='title'>
                      <a target="blank" href={item['link']}>
                        {item['title']}
                      </a>
                      <div className='description'>
                        <span>{item['description']}</span>
                      </div>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="pagina-header">Vergelijkbaar</div>
          <div id="wrap">Niks vergelijkbaars gevonden!</div>
          <div className="pagina-header">Meer van RTVnoord</div>
          <div id="wrap">Niks vergelijkbaars gevonden!</div>
        </div>

      );
    }
  }
}

export default ItemsPagina;