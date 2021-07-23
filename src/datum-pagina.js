import React, { Component } from 'react';
import ItemsLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import ItemsLijst from './items-lijst.js';
import moment from 'moment';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import nl from 'date-fns/locale/nl';
import "react-datepicker/dist/react-datepicker.css";
import KiesDatumPlaceholder from './placeholder/kies-datum-placeholder.js';

registerLocale('nl', nl);
setDefaultLocale('nl');

class DatumPagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
          resultaten: [],
          startDate: new Date()
        };
    }

    handleDateChange = (date) => {
      var dateFormatted = moment(date).format('DD-MM-YYYY')
      this.setState({date: dateFormatted, startDate: date});
      console.log("de datepicker heeft een date " + dateFormatted);
  
      fetch(process.env.REACT_APP_BRAKDAGFLASK+"/items/datum/" + dateFormatted)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            resultaten: result
          });
          // this.props.dateOpdracht(result);
          console.log(" resultaten!" + result.length)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    };

    render() {
      if(this.state.resultaten.length ===  0) {
            return <div>
                  <div className="pagina-header-date-pick">
                    <DatePicker 
                    peekNextMonth
                    showMonthDropdown
                    dropdownMode="select"
                    minDate={new Date("01-04-2016")} 
                    placeholderText="Kies een datum" 
                    selected={this.state.startDate} 
                    locale="nl" 
                    dateFormat="EEEE dd MMMM yyyy" 
                    onChange={this.handleDateChange} />
                  </div>
              <ItemsLijstPlaceholder />
            <KiesDatumPlaceholder />
            </div>;
        }
        else {
            return (
                <div>
                  <div className="pagina-header-date-pick">
                    <DatePicker 
                    peekNextMonth
                    showMonthDropdown
                    dropdownMode="select"
                    minDate={new Date("01-04-2016")} 
                    placeholderText="Kies een datum" 
                    selected={this.state.startDate} 
                    locale="nl" 
                    dateFormat="EEEE dd MMMM yyyy" 
                    onChange={this.handleDateChange} />
                  </div>
                  <ItemsLijst items={this.state.resultaten} />
                </div>
            );
        }
    }
}

export default DatumPagina;