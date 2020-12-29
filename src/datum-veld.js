import React, { Component } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import nl from "date-fns/locale/nl";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("nl", nl);

class DatumVeld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            datePickerIsOpen: false,
            error: null,
            isLoaded: false,
            resultaten: []
        };
        this.openDatePicker = this.openDatePicker.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    datumOpdracht = () => {
        this.props.datumOpdracht(this.state.resultaten);
    }


    componentDidUpdate() {
        console.log("datum aangepast naar: "+ this.state.startDate);
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
    }

    openDatePicker() {
        this.setState({
          datePickerIsOpen: !this.state.datePickerIsOpen,
        });
    };

    render() {
          
            const handleCalendarClose = () => console.log("Calendar closed");
            const handleCalendarOpen = () => console.log("Calendar opened");
        
            return (
                <div>
                    <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    onCalendarClose={handleCalendarClose}
                    onCalendarOpen={handleCalendarOpen}
                    onClickOutside={this.openDatePicker}
                    open={this.state.datePickerIsOpen}
                    dateFormat="dd MMMM"
                    locale="nl"
                    />
                    
                </div>
            );

    }
}
export default DatumVeld;  