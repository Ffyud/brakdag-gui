import React, { Component } from 'react';

class InfoPagina extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='wrap'>
        <div className='box-wide'>
          Brakdag is een aggregator van nieuws. Brakdag verzamelt nieuws uit de stad Groningen van allerlei bronnen en maakt het inzichtelijk.
              </div>
        <div className='box-wide'>
          <span><b><i className="ri-eye-line ri-2x"></i> Brede blik</b></span>
          <span> Meerdere nieuwsbronnen, dus meer inzichten. Wees een goede burger en weet wat er allemaal speelt in onze Stad.</span>
        </div>        
        <div className='box-wide'>
          <span><b><i className="ri-archive-line ri-2x"></i> Levend archief</b></span>
          <span> Doorzoek de vele duizenden artikelen uit Stad. Dat zoekt wat makkelijker dan alle nieuwssites bij langs te gaan.</span>
        </div>      
        <div className='box-wide'>
          <span><b><i className="ri-database-2-line ri-2x"></i> Open Data</b></span>
          <span> Gebruik het nieuws wat Brakdag verzamelt zelf in je eigen toepassing via de API.</span>
        </div>
        <div className='box-wide'>
          <span><b><i className="ri-open-source-line ri-2x"></i> Open Source</b></span>
          <span> Help mee verbeteren of begin een eigen Brakdag-variant. De broncode is openbaar.</span>
        </div>
      </div>
    );
  }
}

export default InfoPagina;