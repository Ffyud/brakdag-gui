import React, { Component } from 'react';

class LijstAllesVandaag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/items")
      .then(res => res.json())
      .then(
        (result) => {
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
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Niet goed gegaan: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Laden...</div>;
    } else {
      return (
        <div id='wrap'>
          <ul className='lijst'>
            {items.map(item => (
              <li key={item['id']}>
                <ul className='lijst-item'>
                  <li className='bron'>
                    <img alt={item['bron_title']} src={item['logo']} />
                  </li>
                  <li className='title'>
                    <a target="blank" href={item['link']}>
                      {item['title']}
                    </a>
                  </li>
                  <li className='description'>
                    {item['description'].split(". ", 1)}

                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default LijstAllesVandaag;