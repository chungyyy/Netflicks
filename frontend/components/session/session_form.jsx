import React from 'react';
import { withRouter } from 'react-router-dom';

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
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            value={this.state.email} 
            onChange={this.update("email")} 
            required
          />
          <input type="password" 
            value={this.state.password} 
            onChange={this.update("password")} 
            required
          />
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
};

export default withRouter(SessionForm);