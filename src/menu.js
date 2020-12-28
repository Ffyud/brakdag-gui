import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import InfoPagina from './info-pagina.js';
import UitgelichtPagina from './uitgelicht-pagina.js';
import CijfersPagina from './cijfers-pagina.js';
import ZoekVeld from './zoek-veld.js';
import ZoekPagina from './zoek-pagina.js';
import HomePagina from './home-pagina.js';

export default function BrakdagMenu() {
    return (
        <Router>
            <div id="header">
                <ul className="header-lijst">
                    <li id="header-logo">
                        <Link to="/">
                            <div id="logo">Brakdag</div>
                            <div id="logo-small">BD</div>
                            </Link>
                    </li>
                    <li id="header-info">
                        <Link to="/info">
                            <div id="info"><i className="ri-information-line"></i></div>
                        </Link>
                    </li>
                    <li id="header-datum">
                        <div id="datum">
                            <div id="weekdag">MAANDAG</div>
                            <div id="dagmaand">20 NOV</div>
                        </div>
                    </li>
                    <li id="header-zoek">
                        {/* <Link to="/zoeken"></Link> */}
                        <ZoekVeld/>
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
                <Route exact path="/cijfers">
                    <Cijfers />
                </Route>
                <Route exact path="/zoeken">
                    <ZoekPagina />
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
        <HomePagina />
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
function Zoeken() {
    return (
        <ZoekPagina />
    );
}

function Info() {
    return (
        <InfoPagina />
    );
}