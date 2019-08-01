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

  render() {
    return(
      <div>
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
              <div className="input-field-separator-2"></div>
              <input className="input-button" type="submit" value={this.props.formType}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(SessionForm);