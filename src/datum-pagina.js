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

    componentDidMount() {
      if(this.props.match !== undefined) {
        var dateUrl = this.props.match.params.datumId;

        if(moment(dateUrl, 'YYYY-MM-DD').isValid()) {
          var dateMomentObject = moment(dateUrl, "DD-MM-YYYY");
          var fullDateObject = dateMomentObject.toDate();
          this.handleDateChange(fullDateObject);
        }
        else
        {
          // ongeldige datum
        }

      }
      else
      {
        // geen prop meegegeven in de url
      }
    }

    handleDateChange = (date) => {
      var dateFormatted = moment(date).format('DD-MM-YYYY')
      this.setState({date: dateFormatted, startDate: date});

      fetch(process.env.REACT_APP_BRAKDAGFLASK+"/items/datum/" + dateFormatted)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            resultaten: result
          });
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
                    dateFormat="EEEE d MMMM yyyy" 
                    disabledKeyboardNavigation 
                    onFocus={e => e.target.blur()} 
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
                    dateFormat="EEEE d MMMM yyyy" 
                    onChange={this.handleDateChange} />
                  </div>
                  <ItemsLijst items={this.state.resultaten} />
                </div>
            );
        }
    }
}

export default DatumPagina;