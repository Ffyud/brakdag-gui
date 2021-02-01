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
      if (descTrim.slice(-1) !== ".") {
        descTrim += ".";
      }
      return <span>{descTrim}</span>;
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
                </li>
                <li className='title'>
                  <a target="blank" href={item['link']}>
                    {item['title']}
                  </a>
                  <div className='description'>
                    <MooieDescription description={item['description']} />
                  </div>
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