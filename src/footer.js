import React, { Component } from 'react';

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
        <div id="footer">
            <div className="logo">BRAKDAG</div>
            <div className="logo-tag">Verzamelt nieuws uit de stad Groningen en maakt het inzichtelijk.</div>
        </div>
      );
   }
}

export default Footer;