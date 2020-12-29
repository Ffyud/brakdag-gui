import React, { Component } from 'react';
import BrakdagMenu from './menu';
import ZoekPagina from './zoek-pagina';

class ZoekVeld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateInput: "",
            error: null,
            isLoaded: false,
            erWordtGezocht: false,
            resultaten: []
        };
    }

    zoekOpdracht = () => {
        this.props.zoekOpdracht(this.state.resultaten);            
    }

    componentDidUpdate() {
        var huidigeInput = this.state.updateInput;
        if (this.state.erWordtGezocht === true) {
            if(huidigeInput.length > 2) {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ term: this.state.updateInput })
                };
                fetch("http://127.0.0.1:5000/items/zoeken", requestOptions)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            console.log(result)
                            this.setState({
                                isLoaded: true,
                                resultaten: result
                            });
                            this.zoekOpdracht()
    
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
    }

    render() {
        const handleInput = (event) => {
            this.setState({
                updateInput: event.target.value
            });
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                this.setState({
                    erWordtGezocht: true
                });
            }
        }

        return <div><input placeholder='ZOEKEN' id='zoeken' type='text' onChange={handleInput} onKeyDown={handleKeyDown} /></div>;
    }
}
export default ZoekVeld;  