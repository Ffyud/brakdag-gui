import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class ItemsLijst extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  render() {
    function MooieDescription(props) {
      var descKort = props.description.split(". ", 1);
      var descTrim = descKort[0].trim();
      if(descTrim.length < 10) {
        descTrim = ""
      }
      else if (descTrim.slice(-1) !== ".") {
        descTrim += ".";
      }
      return <span>{descTrim}</span>;
    }

    function NetteTijd(props) {
      var date = new Date(props.timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var formattedTime = hours + ':' + minutes.substr(-2);
      return <span>{formattedTime}</span>
    }

    const { items } = this.props;
    return (
      <div id='wrap'>
        <ul className='lijst'>
          {items.map(item => (
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
                    <Link to={"/item/" + item['id']}>
                      <summary className='description'>
                        {item['description'] !==  null &&
                          <MooieDescription description={item['description']} />
                        }
                      </summary>
                      </Link>
                  </li>
                </ul>
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsLijst;