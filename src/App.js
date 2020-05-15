import React, { Component } from 'react';

import PageWrapper from './components/PageWrapper/PageWrapper';
import Auth from './pages/auth/Auth';

class App extends Component{
  render(){
    return (
      <div className="App">
        <PageWrapper>
          <Auth/>
        </PageWrapper>
      </div>
    );
  }
}

export default App;
