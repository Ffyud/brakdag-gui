import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';


class ZoekPagina extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //   error: null,
        //   isLoaded: false,
        //   items: []
        // };
    }

    render() {
        const items = [
            {
                id: '1',
                title: 'Testje 1',
                description: 'Descr 1'
            },
            {
                id: '2',
                title: 'Testje 2',
                description: 'Descr 2'
            },
        ];
        return (
            <div><ItemsLijst items={items} /></div>
        );
    }
}

export default ZoekPagina;