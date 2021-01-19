import React, { Component } from 'react';

class ItemsUitgelichtLijst extends Component {
    render() {
        return (
            <div id='wrap'>
                <ul className='lijst-flex'>
                    <li>
                        <div className='flex-item'>
                            <img width="35px" height="35px" src='http://localhost:3000/logos/logo_gic.png' />
                    Filmpje: de eerste online editie van ESNS in een notendop
                    </div>
                    </li>
                    <li>
                        <div className='flex-item'>
                            <img width="35px" height="35px" src='http://localhost:3000/logos/logo_gic.png' />
                    Filmpje: de eerste online editie van ESNS in een notendop
                    </div>
                    </li>
                    <li>
                        <div className='flex-item'>
                            <img width="35px" height="35px" src='http://localhost:3000/logos/logo_oog.png' />
                            Onderzoek: ‘Na maanden op studentenkamer is de rek eruit’
                    </div>
                    </li>
                    <li>
                        <div className='flex-item'>
                            <img width="35px" height="35px" src='http://localhost:3000/logos/logo_gic.png' />
                    Filmpje: de eerste online editie van ESNS in een notendop
                    </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ItemsUitgelichtLijst;