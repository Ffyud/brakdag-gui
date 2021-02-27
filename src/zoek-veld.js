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
                this.setState({
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    fontColor: "rgba(0, 0, 0, 0.5)"
                });
            }
        }

        const doeActief = (event) => {
            event.target.select();
            this.setState({
                backgroundColor: "rgb(252, 251, 238)",
                fontColor: "#000"
            });
        }

        return <div><input placeholder='ZOEKEN' style={{ color: this.state.fontColor,backgroundColor: this.state.backgroundColor}} id='zoeken' type='text' onChange={handleInput} onKeyDown={handleKeyDown} onBlur={doeRustig} onFocus={doeActief}/></div>;
    }
}
export default ZoekVeld;  