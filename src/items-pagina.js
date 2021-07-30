import React, { Component } from 'react';
import ItemsLijst from './items-lijst';
import ItemLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class ItemsPagina extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      itemId: this.props.match.params.itemId,
      resultatenVergelijking: [],
      resultaatItem: []
    };
  }

  componentDidUpdate() {
    if (this.state.itemId !== this.props.match.params.itemId) {
      this.restCall(this.props.match.params.itemId)
      this.setState({ itemId: this.props.match.params.itemId });
    }
  }

  restCall = (itemId) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`` + process.env.REACT_APP_BRAKDAGFLASK + `/items/${itemId}`, requestOptions)
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

    fetch(`` + process.env.REACT_APP_BRAKDAGFLASK + `/items/vergelijkbaar/${itemId}`, requestOptions)
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

  componentDidMount() {
    this.restCall(this.state.itemId)
  }

  render() {

    function NetteTijd(props) {
      var date = new Date(props.timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var formattedTime = hours + ':' + minutes.substr(-2);
      return <span>{formattedTime}</span>
    }

    function NetteTijdVolledig(props) {
      var formattedTime = moment.unix(props).format("DD-MM-YYYY");
      return <span>{formattedTime}</span>
    }

    const { error, isLoaded, resultaatItem, resultatenVergelijking } = this.state;
    if (error || !isLoaded || resultaatItem.length === 0) {
      return <div><header className="pagina-header"></header><ItemLijstPlaceholder /></div>;
    } else {
      return (
        <div>
          <div className="pagina-header">Artikel <span className="pagina-header-sub">{NetteTijdVolledig(resultaatItem[0]['timestamp_publicatie'])}</span></div>
          <div id='wrap'>
            <ul className='lijst'>
              {resultaatItem.map(item => (
                <li key={item['id']}>
                  <ul className='lijst-item'>
                    <li className='bron'>
                      <Link to={"/bron/" + item['bron_id']}>
                        <img alt={item['bron_title']} src={item['logo']} data-bron={item['bron_id']} />
                      </Link>
                      <NetteTijd timestamp={item['timestamp_publicatie']} />
                    </li>
                    <li className='title'>
                      <a className='title-ref' target="blank" href={item['link']}>
                        {item['title']}
                      </a>
                      <summary className='description'>
                        <span>{item['description']}</span>
                      </summary>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          {resultatenVergelijking.length > 0 &&
          <div>
          <div className="pagina-header">Vergelijkbaar</div>
          <ItemsLijst items={resultatenVergelijking} /></div>
          }
        </div>
      );
    }
  }
}

export default ItemsPagina;