import React, { Component } from 'react';
import ItemLijstPlaceholder from './items-lijst-placeholder.js';
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
            <div><ItemLijstPlaceholder /></div>
            // <div><ItemsLijst items={onDatumOpdracht} /></div>
        );
    }
}

export default DatumPagina;