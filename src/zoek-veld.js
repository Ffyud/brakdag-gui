import React, { Component } from 'react';

class ZoekVeld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zoekInput: '',
            error: null,
            isLoaded: false,
            erWordtGezocht: false
        };
    }

    componentDidUpdate() {
        if (this.state.erWordtGezocht === true) {
            console.log("veldinhoud:" + this.state.zoekInput);
            console.log("lol dit pas na true");
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ term: 'vuurwerk' })
            };
            fetch("http://127.0.0.1:5000/items/zoeken", requestOptions)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result)
                        this.setState({
                            isLoaded: true,
                            items: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
                .then(
                    this.setState({
                        erWordtGezocht: false
                    })
                )
        }
    }

    render() {
        const handleInput = (event) => {
            console.log("yoooo input")
            this.setState({
                zoekInput: event.key
            });
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                this.setState({
                    erWordtGezocht: true
                });
            }
        }
        console.log('status erWordtGezocht = ' + this.state.erWordtGezocht)

        const zoekInput = this.state.zoekInput;

        return <div><input value={zoekInput} type='text' onInput={handleInput} onKeyDown={handleKeyDown} /></div>;
    }
}

export default ZoekVeld;  