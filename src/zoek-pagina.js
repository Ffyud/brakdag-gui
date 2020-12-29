import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';
import ZoekVeld from './zoek-veld.js';

class ZoekPagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
        };
    }

    render() {
        const { onZoekOpdracht } = this.props;

        return (
            <div><ItemsLijst items={onZoekOpdracht} /></div>
        );
    }
}

export default ZoekPagina;