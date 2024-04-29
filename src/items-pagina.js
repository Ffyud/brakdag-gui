import React, { useState, useEffect } from 'react';
import ItemsLijst from './items-lijst';
import ItemLijstPlaceholder from './placeholder/items-lijst-placeholder.js';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function ItemsPagina(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemId, setItemId] = useState(props.match.params.itemId);
  const [resultatenVergelijking, setResultatenVergelijking] = useState([]);
  const [resultaatItem, setResultaatItem] = useState([]);

  useEffect(() => {
    restCall(itemId);
  }, [itemId]);

  useEffect(() => {
    if (itemId !== props.match.params.itemId) {
      setItemId(props.match.params.itemId);
    }
  }, [props.match.params.itemId]);

  const restCall = (itemId) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`` + process.env.REACT_APP_BRAKDAGFLASK + `/items/${itemId}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResultaatItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

    fetch(`` + process.env.REACT_APP_BRAKDAGFLASK + `/items/vergelijkbaar/${itemId}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResultatenVergelijking(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const selectAndCopyItemLink = () => {
    var copyElement = document.getElementById("copy-text");
    var vinkje = document.createElement("i");

    vinkje.classList.add("ri-check-line");    
    vinkje.classList.add("confirm-vinkje");
    copyElement.appendChild(vinkje);

    var linkElement = document.getElementById("item-link");
    navigator.clipboard.writeText(linkElement.value);
  }

  const selectAll = () => {
    var linkElement = document.getElementById("item-link");
    linkElement.select();
    linkElement.setSelectionRange(0, 99999);
  }

  const NetteTijd = (props) => {
    var date = new Date(props.timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return <span>{formattedTime}</span>
  }

  const getFormattedDate = (props) => {
    var formattedTime = moment.unix(props).format("DD-MM-YYYY");
    return <span>{formattedTime}</span>
  }

  if (error || !isLoaded || resultaatItem.length === 0) {
    return <div><header className="pagina-header"></header><ItemLijstPlaceholder /></div>;
  } else {
    return (
      <div>
        <div className="pagina-header">Artikel <span className="pagina-header-sub">gepubliceerd op {getFormattedDate(resultaatItem[0]['timestamp_publicatie'])}</span></div>
        <div id='wrap'>
          <ul className='lijst'>
            {resultaatItem.map(item => (
              <li key={item['id']}>
                <ul className='lijst-item'>
                  <li className='bron'>
                    <Link to={"/bron/" + item['bron_id']}>
                      <img alt={item['bron_title']} src={item['logo']} data-bron={item['bron_id']} />
                    </Link>
                    <NetteTijd timestamp={item['timestamp_publicatie']} />
                  </li>
                  <li className='title'>
                    <a className='title-ref' target="blank" href={item['link']}>
                      {item['title']}
                    </a>
                    <summary className='description'>
                      <span>{item['description']}</span>
                    </summary>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="wrapper">
          <div className="item-action">
            <input id="item-link" type="text" value={"https://brakdag.nl/item/" + itemId} onFocus={selectAll} /><span onClick={selectAndCopyItemLink} id="copy-text">link kopieren</span>
          </div>
        </div>
        {resultatenVergelijking.length > 0 &&
        <div>
          <div className="pagina-header">Vergelijkbaar</div>
          <ItemsLijst items={resultatenVergelijking} />
        </div>
        }
      </div>
    );
  }
}

export default ItemsPagina;
