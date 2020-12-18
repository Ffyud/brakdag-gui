import React, { Component } from 'react';

class UitgelichtPagina extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   items: []
    // };
  }

  componentDidMount() {
    // hoeft niks hoor
  }

	render() {
    //   const { error, isLoaded, items} = this.state;
        return (
          <div id='wrap'>
              Uitgelicht ja
          </div>
        );
    }
} 

export default UitgelichtPagina;