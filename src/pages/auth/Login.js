import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

/* IMPORT Actions */
import { actionAuthenticate } from '../../actions/index';
/* ./IMPORT Actions */


/* IMPORT UI-Components */
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
/* ./IMPORT UI-Components */


class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      token:localStorage.getItem('token'),
      formValues : {
        email:'',
        password:''
      },
      formHelperTexts : {
        email:{helperText:"",error:false},
        password:{helperText:"",error:false}
      },
      formIsValid:true
    }
  }



  changeValue = (e) => {
    let { formValues } = { ...this.state };
    formValues[e.target.id] = e.target.value;
    this.setState({
      formValues:formValues
    });
  }

  validateForm = () => {
    let { formHelperTexts,formIsValid } = { ...this.state };
    formHelperTexts = {
      email:{helperText:"",error:false},
      password:{helperText:"",error:false}
    };
    formIsValid=true

    if (this.state.formValues.email === ''){
      formHelperTexts.email = {
        helperText:'Please insert a valid email adress.',
        error:true
      };
      formIsValid=false;
    }
    if (this.state.formValues.password === ''){
      formHelperTexts.password = {
        helperText:'Please insert a password.',
        error:true
      };
      formIsValid=false;
    }
    console.log(formIsValid);
    if (formIsValid){
      this.props.onAuthentication(this.state.formValues);
    }

    this.setState({
      formHelperTexts:formHelperTexts
    })
  }

  responseTest = () => {
    const basic_url = process.env.REACT_APP_API_URL;
    const auth_url = basic_url + 'user/auth/xxx'
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    axios
      .get(auth_url, {}, config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {

      })
  }

  render(){
    return(
      <form noValidate autoComplete="off">
      <Button onClick={this.responseTest}>Click</Button>

        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        <small>
          <span>or </span>
          <Link
            href="#"
            data-show="registration"
            onClick={this.props.switchView}
          >
            create an Account
          </Link>
        </small>


        <TextField
          id="email"
          label="Email-Adress"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={this.changeValue}
          error={this.state.formHelperTexts.email.error}
          helperText={this.state.formHelperTexts.email.helperText}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={this.changeValue}
          error={this.state.formHelperTexts.password.error}
          helperText={this.state.formHelperTexts.password.helperText}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={this.validateForm}
          margin="normal"
          fullWidth
        >
          Login
        </Button>
        <Grid container>
          <small>
            <Link
              href="#"
              data-show="passwordForgotten"
              onClick={this.props.switchView}
            >
              Password forgotten?
            </Link>
          </small>
        </Grid>

      </form>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

let mapDispatchToProps = {
  onAuthentication: actionAuthenticate
}

let LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginContainer;
