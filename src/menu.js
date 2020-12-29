import React, { Component } from 'react';
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
import DatumVeld from './datum-veld.js';
import ZoekPagina from './zoek-pagina.js';
import HomePagina from './home-pagina.js';

class BrakdagMenu extends Component{
    constructor(props) {
        super(props)
        this.state = {
            zoekResultaten: []
        }
    }

    zoekOpdracht = (resultaten) => {
        this.setState({zoekResultaten: resultaten});
    }

    render() {
        const zoekResultaten = this.state.zoekResultaten;
  
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
                            {/* <DatumVeld/> */}
                        </li>
                        <li id="header-zoek">
                            <Link to="/zoeken">
                                <ZoekVeld zoekOpdracht={this.zoekOpdracht}/>
                            </Link>
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
                        <ZoekPagina onZoekOpdracht={zoekResultaten} />
                    </Route>
                    <Route exact path="/info">
                        <Info />
                    </Route>
                </Switch>
    
            </Router>
        );
    }
};    
    

export default BrakdagMenu;

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

function Info() {
    return (
        <InfoPagina />
    );
}