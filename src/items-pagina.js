import React, { Component } from 'react';
import ItemsLijst from './items-lijst';
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
      isLoaded: false,
      resultatenVergelijking: [],
      resultaatItem: []
    };
  }

  componentDidMount() {
    let item = this.props.match.params.itemId;

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`` + process.env.REACT_APP_BRAKDAGFLASK + `/items/${item}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            resultaatItem: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    fetch(`` + process.env.REACT_APP_BRAKDAGFLASK + `/items/vergelijkbaar/${item}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            resultatenVergelijking: result
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
    const { error, isLoaded, resultaatItem, resultatenVergelijking } = this.state;
    if (error || !isLoaded || resultaatItem.length === 0) {
      return <div><ItemLijstPlaceholder /></div>;
    } else {
      return (
        <div>
          <div className="pagina-header">Artikel</div>
          <div id='wrap'>
            <ul className='lijst'>
              {resultaatItem.map(item => (
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
          <ItemsLijst items={resultatenVergelijking} />
        </div>

      );
    }
  }
}

export default ItemsPagina;