import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
class PasswordForgotten extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formValues : {
        email:'',
      },
      formHelperTexts : {
        email:{helperText:"",error:false},
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

  validateForm = () => {
    let { formHelperTexts } = { ...this.state };
    formHelperTexts = {
      email:{helperText:"",error:false},
    };
    if (this.state.formValues.email === ''){
      formHelperTexts.email = {
        helperText:'Please insert a valid email adress.',
        error:true
      }
    }
    this.setState({
      formHelperTexts:formHelperTexts
    })
  }

  render(){
    return(
      <form noValidate autoComplete="off">

        <Typography gutterBottom variant="h5" component="h2">
          Password forgotten
        </Typography>
        <small>
          <span>Please insert your Email. </span>
          <Link
            href="#"
            data-show="login"
            onClick={this.props.switchView}
          >
            Or go back.
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


        <Button
          variant="contained"
          color="primary"
          onClick={this.validateForm}
          margin="normal"
          fullWidth
        >
          Send
        </Button>

      </form>
    );
  }
}

export default PasswordForgotten;
