import React, { Component } from 'react';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
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

        if(onDatumOpdracht === undefined) {
            return <div><ItemsLijstPlaceholder /></div>;
        }
        else if(onDatumOpdracht.length ===  0) {
            return <div><ItemsLijstPlaceholder /></div>;
        }
        else {
            return (
                <div><ItemsLijst items={onDatumOpdracht} /></div>
            );
        }
    }
}

export default DatumPagina;