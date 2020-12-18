import React, { Component } from 'react';
import { NieuwsTaart } from './graphs/nieuws-taart.js';
class CijfersPagina extends Component {
     

	render() {
        return (
          <div id='wrap'>
              <div className='box-wide'>
                  <NieuwsTaart />
              </div>
          </div>
        );
    }
} 

export default CijfersPagina;