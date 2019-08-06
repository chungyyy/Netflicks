import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      return this.setState({
        [field]: e.target.value,
      })
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    const errors = this.props.errors.join(". ");
    return errors
  }

  render() {
    const signUpLink = () => {
      if (this.props.formType === "Sign In") {
        return (
          <div className="signup-now">
            New to Netflicks?
              <Link to="/signup" className="link-signup-now">Sign up now</Link>
            .
          </div>
        )
      } else {
        return (
          <div className="signup-now">
            You know you want to.
            <Link to="/" className="link-signup-now">Back to home</Link>
            .
          </div>
        )
      };
    }

    return(
      <div className="basic-layout">
        <div className="bg-gradient">
          <div className="session-basic-header">
            <Link to="/"><img className="nf-logo-2" src={window.nflogoURL} /></Link>
          </div>
          <div className="session-form-ctn">
            <form className="session-form" onSubmit={this.handleSubmit}>
              <h1 className="session-h1">{this.props.formType}</h1>
              <input className="input-field" type="email" 
                value={this.state.email} 
                onChange={this.update("email")} 
                required
                placeholder="Email"
              />
              <div className="input-field-separator"></div>
              <input className="input-field" type="password" 
                value={this.state.password} 
                onChange={this.update("password")} 
                required
                placeholder="Password"
              />
              <p className="session-errors">{this.renderErrors()}</p>
              <div className="input-field-separator-2"></div>
              <input className="input-button" type="submit" value={this.props.formType}/>
            </form>
            <div className="session-signup-space"></div>
            {signUpLink()}
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(SessionForm);