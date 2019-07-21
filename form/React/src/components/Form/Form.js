import React from 'react';
import Input from '../Input';

export class Form extends React.Component {

    state = {
        form: {
          email: '', 
          password: '', 
          reenter: ''
        }, 
        validation: {
          email: '', 
          password: '', 
          reenter: ''
        }
    }
    
    handleInputChange = (name, value, errorMessage) => {
      this.setState(prevState => ({
        form: {
          ...prevState.form, 
          [name]: value
        }, 
        validation: {
          ...prevState.validation, 
          [name]: errorMessage
        }
      }));
    }

    disableSubmit = () => Object.values(this.state.validation).some(element => element !== true)
  
    render() {
      console.log(this.state);
        return (
          <form>
              <label name="label">{this.state.validation.email}</label>
              <Input name="email" 
                placeholder="Enter email..." 
                onChange={this.handleInputChange} 
                />
              <label name="label">{this.state.validation.password}</label>
              <Input name="password" 
                placeholder="Enter password..." 
                onChange={this.handleInputChange} 
                />
              <label name="label">{this.state.validation.reenter}</label>
              <Input name="reenter" 
                placeholder="Re-enter password..." 
                onChange={this.handleInputChange} 
                password = {this.state.form.password}
                />
              <button name="button" 
                    disabled={this.disableSubmit()}>Sign in</button>
          </form>
        )
    }
}