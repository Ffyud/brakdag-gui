import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import ZoekVeld from './zoek-veld.js';
import ZoekPagina from './zoek-pagina.js';
import HomePagina from './home-pagina.js';
import DatumPagina from './datum-pagina.js';
import BronPagina from './bron-pagina.js';
import ItemsPagina from './items-pagina.js';
import BronOverzichtPagina from './bron-overzicht-pagina.js';
import Footer from './footer.js';

class BrakdagMenu extends Component{
    constructor(props) {
        super(props)
        this.state = {
            zoekResultaten: undefined,
            datumResultaten: []
        }
    }

    zoekOpdracht = (resultaten) => {
        this.setState({
            zoekResultaten: resultaten
        });
    }

    datumOpdracht = (resultaten) => {
        this.setState({
            datumResultaten: resultaten
        });
    }

    
    render() {
        const zoekResultaten = this.state.zoekResultaten;
        const datumResultaten = this.state.datumResultaten;
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
                        <li id="header-bron">
                            <Link to="/bronnen">
                                <div id="bron-info"><i className="ri-newspaper-line"></i></div>
                            </Link>
                        </li>
                        <li id="header-datum">
                            <Link to="/datum">
                                <div id="datum-info"><i className="ri-history-line"></i></div>
                            </Link>
                        </li>
                        <li id="header-zoek">
                            <Link to="/zoeken">
                                <ZoekVeld zoekOpdracht={this.zoekOpdracht}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/bron/:bronId" component={BronPagina} />
                    <Route exact path="/item/:itemId" component={ItemsPagina} />
                    <Route exact path="/">
                        <Thuis/>
                    </Route>    
                    <Route exact path="/bronnen">
                        <BronOverzichtPagina />
                    </Route>
                    <Route exact path="/datum">
                        <DatumPagina onDatumOpdracht={datumResultaten} />
                    </Route>
                    <Route exact path="/zoeken">
                        <ZoekPagina onZoekOpdracht={zoekResultaten} />
                    </Route>
                </Switch>
                <Footer />

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
