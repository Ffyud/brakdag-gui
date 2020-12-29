import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';

class DatumPagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
        };
    }

    render() {
        const { onDatumOpdracht } = this.props;

        return (
            <div><ItemsLijst items={onDatumOpdracht} /></div>
        );
    }
}

export default DatumPagina;