import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import LijstAllesVandaag from './lijst-vandaag.js';
import InfoPagina from './info-pagina.js';
import UitgelichtPagina from './uitgelicht-pagina.js';
import CijfersPagina from './cijfers-pagina.js';
import ZoekVeld from './zoek-veld.js';
import ZoekPagina from './zoek-pagina.js';


export default function BrakdagMenu() {
    return (
        <Router>
            <div id="header">
                <ul className="header-lijst">
                    <li>
                        <Link to="/"><div id="logo">Brakdag</div></Link>
                    </li>
                    {/* <li>
                        <div id="datum">
                            25<br/>NOV
                        </div>
                    </li> */}
                    {/* <li>
                        <Link to="/uitgelicht">Uitgelicht</Link>
                    </li> */}
                    <li>
                        <Link to="/cijfers"><i className="ri-bar-chart-box-line"></i></Link>
                    </li>
                    <li><ZoekVeld/></li>
                    <li><Link to="/zoeken">tijdelijk zoekknop</Link></li>
                    <li>
                        <Link to="/info"><i className="ri-information-line"></i></Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/">
                    <Thuis />
                </Route>    
                <Route exact path="/uitgelicht">
                    <Uitgelicht />
                </Route>
                <Route exact path="/zoeken">
                    <ZoekPagina />
                </Route>
                <Route exact path="/cijfers">
                    <Cijfers />
                </Route>
                <Route exact path="/info">
                    <Info />
                </Route>
            </Switch>

        </Router>
    );
}

function Thuis() {
    return (
        <LijstAllesVandaag />
    );
}

function Uitgelicht() {
    return (
        <UitgelichtPagina />
    );
}

function Cijfers() {
    return (
        <CijfersPagina />
    );
}

function Info() {
    return (
        <InfoPagina />
    );
}