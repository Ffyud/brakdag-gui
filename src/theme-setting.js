import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import localforage from 'localforage';

class ThemeSetting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false
        };
  }

  componentDidMount() {
    localforage.getItem("theme")
    .then(value => {  
      if(value !== null )  
      {
        console.log("Actuele thema is " + value + ".")

        var root = document.getElementById('root')
        root.removeAttribute('class')
        root.classList.add(value);
      }   
    })
  }

  setTheme = (event) => {
    let themeChoice = event.target.id
    localforage.setItem("theme", themeChoice)
    .then(value => {     
      console.log("Gekozen voor " + value + ".")
      var root = document.getElementById('root')
      root.removeAttribute('class')
      root.classList.add(value);
    });
  }
  
  render() {
      return (
        <div id="theme-setting">
              <span className="theme-option" id="theme-light" onClick={this.setTheme}>licht</span>
              <span className="theme-option" id="theme-dark" onClick={this.setTheme}>donker</span>
              {/* <span className="theme-option" id="theme-teletext" onClick={this.setTheme}>teletext</span> */}
        </div>
      );
   }
}

export default ThemeSetting;