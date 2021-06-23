import React, { Component } from 'react';

class ServerFoutPlaceholder extends Component {

  
  render() {
    const { message } = this.props;
    return (
      <div className='server-fout-placeholder'>
        <i class="ri-emotion-unhappy-line"></i>
        <h1>Brakdag is even stuk.</h1>
        <h5>{message}</h5>
      </div>
    );
  }
}

export default ServerFoutPlaceholder;