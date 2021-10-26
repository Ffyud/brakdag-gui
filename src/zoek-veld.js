import React, { Component } from 'react';

class ZoekVeld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateInput: "",
            error: null,
            isLoaded: false,
            erWordtGezocht: false,
            resultaten: undefined,
            // searchActiveCss: "search-passive",
            backgroundColor: "rgb(252, 251, 238)"
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
                fetch(process.env.REACT_APP_BRAKDAGFLASK + "/items/zoeken", requestOptions)
                    .then(res => res.json())
                    .then(
                        (result) => {
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
            else if(huidigeInput.length === 0) {
                this.setState({
                    resultaten: undefined,
                    isLoaded: false,
                    erWordtGezocht: false
                });
                this.zoekOpdracht()
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

        const doeRustig = () => {
            if(this.state.updateInput !== '')
            {
                // var zoek = document.getElementById('zoeken')
                // zoek.removeAttribute('class')
                // zoek.classList.add('search-passive');
            }
        }

        const doeActief = (event) => {
            event.target.select();
            // var zoek = document.getElementById('zoeken')
            // zoek.removeAttribute('class')
            // zoek.classList.add('search-active');
        }
        
        return <div><input placeholder='Zoek naar nieuws' id='zoeken' type='text' onChange={handleInput} onKeyDown={handleKeyDown} onBlur={doeRustig} onFocus={doeActief}/></div>;
    }
}
export default ZoekVeld;  