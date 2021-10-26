import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ThemeSetting from './theme-setting';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false
        };
  }

  componentDidMount() {
  }

  render() {
      return (
        <footer id="footer">
            <div className="logo"><Link to="/">BRAKDAG</Link></div>
            <div className="logo-tag">De verzamelplek voor nieuws uit de stad Groningen.</div>
            <div className="sitemap">
              <ul className="sitemap">
                <li><Link to="/bronnen">Bronnen</Link></li>
                <li>&#183;</li>
                <li><Link to="/datum">Datum</Link></li>
                <li>&#183;</li>
                <li><Link to="/zoeken">Zoeken</Link></li>
              </ul>
            </div>
            <ThemeSetting/>
        </footer>
      );
   }
}

export default Footer;