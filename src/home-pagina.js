import React, { Component } from 'react';
import ItemsLijst from './items-lijst.js';
import ItemsUitgelichtLijst from './items-uitgelicht-lijst';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';

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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    var today = new Date();
    const monthNames = ["januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "october", "november", "december"];

    const dayNames = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]

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
    this.interval = setInterval(() => {
      fetch(process.env.REACT_APP_BRAKDAGFLASK+"/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            resultaten: result,
            resultatenAantal: result.length // fixen placeholder en nieuws van gisteren
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }, 10000);
  }

  render() {
    const { error, isLoaded, resultaten, resultatenUitgelicht } = this.state;
    if (error) {
      return <div>Niet goed gegaan: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><ItemsLijstPlaceholder /></div>;
    } else {
      return (
        <div>
          <div className="pagina-header">Uitgelicht</div>
          <ItemsUitgelichtLijst items={resultatenUitgelicht} />
          <div className="pagina-header">Het nieuws van {this.state.todayDate}</div>
          <ItemsLijst items={resultaten} />
        </div>
      );
    }
  }
}

export default HomePagina;