import React, { Component } from 'react';

class InfoPagina extends Component {

  render() {
    return (
      <div id='wrap'>
        <div className='box-wide'>
          Brakdag is een verzamelaar van het nieuws uit de stad Groningen en maakt het inzichtelijk.
        </div>
        <div className='box-flex'>
          <div>
            <h2><i className="ri-search-eye-line ri-2x"></i><br />nieuws inzichtelijk</h2>
            <span>Bekijk het nieuws per datum, bron of zoek iets specifieks.</span>
          </div>
          <div>
            <h2><i className="ri-archive-line ri-2x"></i><br />levend archief</h2>
            <span>Doorzoek meer dan 200.000 artikelen uit het archief.</span>
          </div>
          <div>
            <h2><i className="ri-database-2-line ri-2x"></i><br />open api</h2>
            <span>Bevraag de Brakdag Api op allerlei manieren om het nieuws op je eigen manier te gebruiken.</span>
          </div>
          <div>
            <h2><i className="ri-open-source-line ri-2x"></i><br />open source</h2>
            <span>De volledige broncode van Brakdag is openbaar toegankelijk op Github.</span>
          </div>
          {/* <div>
            <h2><i className="ri-folder-download-line ri-2x"></i><br />open data</h2>
            <span>Het volledige archief is te downloaden, als CSV, Parquet of Avro bestand.</span>
          </div> */}
        </div>
        <div className='box-wide'>
          Brakdag is een hobbyproject om nieuwslezers en journalisten te helpen. Overweeg een donatie! 
          <a target="blank" className="buy-me-coffee" href="https://www.paypal.com/paypalme/davidduyff/1">&#127866; Geef een biertje</a>
        </div>
      </div>
    );
  }
}

export default InfoPagina;