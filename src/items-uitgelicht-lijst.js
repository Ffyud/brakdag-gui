import React, { Component } from 'react';

class ItemsUitgelichtLijst extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beginMap: 0,
            eindeMap: 3
        };

    }

    gaVerder = () => {
        if (this.state.eindeMap === 10) {
            this.setState({
                beginMap: 0,
                eindeMap: 3
            });
        }
        else {
            this.setState({
                beginMap: this.state.beginMap + 1,
                eindeMap: this.state.eindeMap + 1
            });
        }
    }

    render() {
        const { items } = this.props;
        return (
            <div id='wrap'>
                <ul className='lijst-flex'>
                    {items.slice(this.state.beginMap, this.state.eindeMap).map(item => (
                        <li key={item['id']}>
                            <div className='flex-item'>
                                <div className='bron'>
                                    <img alt={item['bron_title']} src={item['logo']} data-bron={item['bron_id']} />
                                </div>
                                <div className='title'>
                                    <a target="blank" href={item['link']}>
                                        {item['title']}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className='lijst-next'><div onClick={this.gaVerder}><i className="ri-arrow-right-line"></i></div></li>
                </ul>
            </div>
        );
    }
}

export default ItemsUitgelichtLijst;