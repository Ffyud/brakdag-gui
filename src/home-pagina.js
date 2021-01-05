import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';
import ItemsLijstPlaceholder from './items-lijst-placeholder.js';

class HomePagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
          resultaten: []
        };
      }
    
      componentDidMount() {
        fetch("http://127.0.0.1:5000/items")
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
        if (error) {
          return <div>Niet goed gegaan: {error.message}</div>;
        } else if (!isLoaded) {
          return <div><ItemsLijstPlaceholder /></div>;
        } else {
          return (
            <div><ItemsLijst items={resultaten} /></div>
            );
        }
    }
}

export default HomePagina;