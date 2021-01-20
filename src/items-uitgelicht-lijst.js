import React, { Component } from 'react';

class ItemsUitgelichtLijst extends Component {
    render() {
        return (
            <div id='wrap'>
                <ul className='lijst-flex'>
                    <li>
                        <div className='flex-item'>
                            <div className='bron'>
                                <img alt='logo' src='http://localhost:3000/logos/logo_gic.png' />
                            </div>
                            <div className='title'><a>Filmpje: de eerste online editie van ESNS in een notendop</a></div>
                    </div>
                    </li>
                    <li>
                        <div className='flex-item'>
                        <div className='bron'>
                                <img alt='logo' src='http://localhost:3000/logos/logo_rtvnoord.png' />
                            </div>
                            <div className='title'><a>Raadsleden diep teleurgesteld over N33: 'Treurig dat de regio de dupe wordt'</a></div>
                            
                    </div>
                    </li>
                    <li>
                        <div className='flex-item'>
                        <div className='bron'>
                                <img alt='logo' src='http://localhost:3000/logos/logo_oog.png' />
                            </div>
                            <div className='title'><a>Gemeente: sportclubs kunnen ons bellen als ze problemen hebben</a></div>
                            
                    </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ItemsUitgelichtLijst;