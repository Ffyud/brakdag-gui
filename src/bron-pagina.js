import React, { Component } from 'react';
import ItemLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
// import ItemsLijst from './items-lijst.js';

class BronPagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
        };
    }

    componentDidMount() {
        // const { bronMatch } = this.props.match.params.bronId;
      console.log("moet die id uit de url fetchen")
        // fetch.get(`/bron/${bronId}`)
        //   .then(({ data: bronId }) => {
        //     console.log('bronId', bronId);
      
        //     this.setState({ bronId });
        //   });
      }

    render() {
        // const { onDatumOpdracht } = this.props;

        return (
            <div><ItemLijstPlaceholder />hai</div>
            // <div><ItemsLijst items={onDatumOpdracht} /></div>
        );
    }
}

export default BronPagina;