import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';
import ItemsUitgelichtLijst from './items-uitgelicht-lijst';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import ServerFoutPlaceholder from './placeholder/server-fout-placeholder.js';

class HomePagina extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      resultaten: [],
      resultatenUitgelicht: [],
      resultatenAantalUitgelicht: 0,
      todayDate: null,
      resultatenAantal: 0
    };
  }

  componentDidMount() {
    var today = new Date();
    const monthNames = ["januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "october", "november", "december"];

    const dayNames = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]

    var weekdayNumber = today.getDay()
    var ddName = dayNames[weekdayNumber]

    var dd = String(today.getDate());
    var mmName =  monthNames[today.getMonth()];
    today = ddName + ' ' + dd + ' ' + mmName;
    
    this.setState({
      todayDate: today
    });

    fetch(process.env.REACT_APP_BRAKDAGFLASK+"/items/uitgelicht")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          resultatenUitgelicht: result,
          resultatenAantalUitgelicht: result.length
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

    fetch(process.env.REACT_APP_BRAKDAGFLASK+"/items")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          resultaten: result,
          resultatenAantal: result.length
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

  }

  render() {
    const { error, isLoaded, resultaten, resultatenUitgelicht } = this.state;
    if (error) {
      return <div><ServerFoutPlaceholder message={error.message} /></div>;
    } else if (!isLoaded) {
      return <div><ItemsLijstPlaceholder /></div>;
    } else {
      if(resultatenUitgelicht.length !== 0) {
        return (
        <div>
          <header className="pagina-header">Uitgelicht</header>
          <ItemsUitgelichtLijst items={resultatenUitgelicht} />
          <header className="pagina-header">
            {this.state.todayDate}
            <span className="pagina-header-sub">{resultaten.length} artikelen</span>
          </header>
          <ItemsLijst items={resultaten} />
        </div>);
      }
      else {
      return (
        <div>
          <header className="pagina-header">{this.state.todayDate}</header>
          <ItemsLijst items={resultaten} />
        </div>
      );
      }
    }
  }
}

export default HomePagina;