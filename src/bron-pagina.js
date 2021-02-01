import React, { Component } from 'react';
import ItemLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import ItemsLijst from './items-lijst.js';

class BronPagina extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      bronTitle: null
    };
  }

  componentDidMount() {
    let bron = this.props.match.params.bronId;

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://127.0.0.1:5000/items/bron/${bron}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            resultaten: result,
            bronTitle: ((result.length === 0) ? '' : result[0]['bron_title'])
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
          <div className="pagina-header">Het nieuws van {this.state.bronTitle}</div>
          <ItemsLijst items={resultaten} />
        </div>
      );
    }
  }
}

export default BronPagina;