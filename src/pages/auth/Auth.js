import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Login from './Login';
import Registration from './Registration';
import PasswordForgotten from './PasswordForgotten';

class Auth extends Component{
  constructor(props) {
    super(props);
    this.state = {
      display:'login',
    }
  }
  switchView = (e) => {
    this.setState({
      display:e.target.attributes['data-show'].value
    });
  }
  render(){
    var form;
    if(this.state.display==='login'){
      form = (<Login switchView={this.switchView} />)
    } else if (this.state.display==='registration') {
      form = (<Registration switchView={this.switchView} />)
    } else {
      form = (<PasswordForgotten switchView={this.switchView} />)
    }
    return(
      <Container maxWidth="xs">
        <Card variant="outlined">
          <CardContent>
            {form}
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default Auth;
