import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';
import ZoekVeld from './zoek-veld.js';

class ZoekPagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
          resultaten: []
        };
    }

    componentDidMount() {
        // bij het laden iets doen
    }

    render() {
        const resultaten = [{
            "bron_id": 21,
            "bron_title": "JouwStad Groningen",
            "description": "Op het dak van het Form was vanavond een spectaculaire lichtshow te zien. Vermoedelijk om je een hart onder de riem te steken in deze bijzondere dagen van een lockdown. Video: Siebrand Wiegman\nHet bericht Lockdown LaserShow Forum Groningen verscheen eerst op JouwStad | Groningen.",
            "id": 11703,
            "link": "https://jouwstad.eu/lockdown-lasershow-forum-groningen/",
            "link_home": "https://jouwstad.eu",
            "logo": "logos/logo_jouwstad.png",
            "timestamp_gevonden": 1608749584,
            "timestamp_publicatie": 1608740314,
            "title": "Lockdown LaserShow Forum Groningen"
        }];
        return (
            <div><h1>Zoekpagina</h1><ItemsLijst items={resultaten} /></div>
        );
    }
}

export default ZoekPagina;