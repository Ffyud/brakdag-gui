import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import NietGezochtPlaceholder from './placeholder/niet-gezocht-placeholder.js';
import NiksGevondenPlaceholder from './placeholder/niks-gevonden-placeholder.js';


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
        if(onZoekOpdracht === undefined) {
            return <div><ItemsLijstPlaceholder /><NietGezochtPlaceholder /></div>;
        }
        else if(onZoekOpdracht.length ===  0) {
            return <div><ItemsLijstPlaceholder /><NiksGevondenPlaceholder /></div>;
        }
        else {
            return (
                <div>
                    <header className="pagina-header">
                        Zoekresultaten
                        <span className="pagina-header-sub">{onZoekOpdracht.length} artikelen</span>
                    </header>
                    <ItemsLijst items={onZoekOpdracht} />
                </div>
            );
        }
    }
}

export default ZoekPagina;