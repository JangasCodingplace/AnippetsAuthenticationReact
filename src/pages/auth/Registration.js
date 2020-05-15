import React, { Component } from 'react';

/* IMPORT UI-Components */
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/* IMPORT Helper-Components */
import { validateEmail } from '../../components/toolbox';

class Registration extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formValues : {
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        agreed:false
      },
      formHelperTexts : {
        firstname:{helperText:"",error:false},
        lastname:{helperText:"",error:false},
        email:{helperText:"",error:false},
        password:{helperText:"",error:false},
        agreed:{helperText:"",error:false}
      }
    }
  }

  changeValue = (e) => {
    let { formValues } = { ...this.state };
    formValues[e.target.id] = e.target.value;
    this.setState({
      formValues:formValues
    });
  }

  handleChange = (e) => {
    let { formValues } = { ...this.state };
    formValues.agreed = e.target.checked;
    this.setState({ formValues:formValues });
  }

  validateForm = () => {
    let { formHelperTexts,formValues } = { ...this.state };
    formHelperTexts = {
      firstname:{helperText:"",error:false},
      lastname:{helperText:"",error:false},
      email:{helperText:"",error:false},
      password:{helperText:"",error:false},
      agreed:{helperText:"",error:false}
    };
    if (formValues.firstname === ''){
      formHelperTexts.firstname = {
        helperText:'Please insert your first name.',
        error:true
      }
    }
    if (formValues.lastname === ''){
      formHelperTexts.lastname = {
        helperText:'Please insert your last name.',
        error:true
      }
    }
    if (formValues.email === '' || !validateEmail(formValues.email)){
      formHelperTexts.email = {
        helperText:'Please insert a valid email adress.',
        error:true
      }
    }
    if (formValues.password.length < 8){
      formHelperTexts.password = {
        helperText:'Please insert a password with minimum 8 letters.',
        error:true
      };
    }
    if (!formValues.agreed){
      formHelperTexts.agreed = {
        helperText:'For getting access you need to agree.',
        error:true
      }
    }
    this.setState({
      formHelperTexts:formHelperTexts
    })
  }

  render(){
    var label = (
      <>Agree our <Link href="#">legals</Link></>
    )
    return(
      <form noValidate autoComplete="off">
        <Typography gutterBottom variant="h5" component="h2">
          Registration
        </Typography>
        <small>
          <span>or </span>
          <Link
            href="#"
            data-show="login"
            onClick={this.props.switchView}
          >
            Sign in
          </Link>
        </small>

        <TextField
          id="firstname"
          label="Firstname"
          variant="outlined"
          onChange={this.changeValue}
          fullWidth
          margin="normal"
          error={this.state.formHelperTexts.firstname.error}
          helperText={this.state.formHelperTexts.firstname.helperText}
        />


        <TextField
          id="lastname"
          label="Lastname"
          variant="outlined"
          onChange={this.changeValue}
          fullWidth
          margin="normal"
          error={this.state.formHelperTexts.lastname.error}
          helperText={this.state.formHelperTexts.lastname.helperText}
        />


        <TextField
          id="email"
          label="Email-Adress"
          variant="outlined"
          onChange={this.changeValue}
          fullWidth
          margin="normal"
          error={this.state.formHelperTexts.email.error}
          helperText={this.state.formHelperTexts.email.helperText}
        />


        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={this.changeValue}
          fullWidth
          margin="normal"
          error={this.state.formHelperTexts.password.error}
          helperText={this.state.formHelperTexts.password.helperText}
        />


        <FormControl margin="normal" required error={this.state.formHelperTexts.agreed.error}>
          <FormControlLabel
            control={
              <Checkbox
                id="agreed"
                color="primary"
                margin="normal"
                onChange={this.handleChange}
              />
            }
            label={label}
          />
          <FormHelperText>{this.state.formHelperTexts.agreed.helperText}</FormHelperText>
        </FormControl>


        <Button variant="contained" fullWidth color="primary" onClick={this.validateForm}>
          Crate your Account
        </Button>
      </form>
    );
  }
}

export default Registration;
