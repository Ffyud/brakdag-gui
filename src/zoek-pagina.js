import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';
import ItemsLijstPlaceholder from './items-lijst-placeholder.js';
import NietGezochtPlaceholder from './niet-gezocht-placeholder.js';
import NiksGevondenPlaceholder from './niks-gevonden-placeholder.js';


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
        console.log(onZoekOpdracht);
        if(onZoekOpdracht === undefined) {
            return <div><ItemsLijstPlaceholder /><NietGezochtPlaceholder /></div>;
        }
        else if(onZoekOpdracht.length ===  0) {
            return <div><ItemsLijstPlaceholder /><NiksGevondenPlaceholder /></div>;
        }
        else {
            return (
                <div><ItemsLijst items={onZoekOpdracht} /></div>
            );
        }
    }
}

export default ZoekPagina;