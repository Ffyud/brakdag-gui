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
            <h2><i className="ri-search-eye-line"></i>nieuws inzichtelijk</h2>
            <span>Bekijk het nieuws van vandaag, per datum, per bron of zoek iets specifieks.</span>
          </div>
          <div>
            <h2><i className="ri-archive-line"></i>levend archief</h2>
            <span>Doorzoek de vele duizenden artikelen uit Stad. Dat zoekt wat makkelijker dan alle nieuwssites bij langs te gaan.</span>
          </div>
          <div>
            <h2><i className="ri-database-2-line"></i>open api</h2>
            <span>Bevraag de Brakdag Api op allerlei manieren om het nieuws op je eigen manier te gebruiken.</span>
          </div>
          <div>
            <h2><i className="ri-open-source-line"></i>open source</h2>
            <span>De volledige broncode van Brakdag is openbaar toegankelijk op Github.</span>
          </div>
          <div>
            <h2><i className="ri-folder-download-line"></i>open data</h2>
            <span>Het volledige archief is te downloaden, als CSV, Parquet of Avro bestand.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoPagina;