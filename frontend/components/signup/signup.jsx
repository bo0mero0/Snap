import React from 'react';
import { Link, hashHistory } from 'react-router';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.currentUser) {
			hashHistory.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.signup({user});
	}


	renderErrors() {
    if (this.props.signupErrors.length) {
  		return(
  			<ul className="login-singup-errors">
  				{this.props.signupErrors.map((error, i) => (
  					<li key={`error-${i}`}>
  						{error}
  					</li>
  				))}
  			</ul>
  		);
    }
	}

	render() {
    if (this.props.currentUser) {
      return (
        <div className="homepage-logged-in">
          <h1>Welcome Back {this.props.currentUser.username}</h1>
        </div>
      );
    } else {
  		return (
  			<div className="signup-form-container">
  				<form onSubmit={this.handleSubmit} className="signup-form-box">
  					<br/>
  					<h2 className="signup-welcome">Welcome to Snap!</h2>
            <h3 className="please-signup">Sign up is quick and easy</h3>
            { this.renderErrors() }
  					<div className="signup-form">
  						<br/>
  							<input type="text"
  								value={this.state.username}
  								onChange={this.update("username")}
  								className="signup-input"
                  placeholder="username" />

  						<br/>
  							<input type="password"
  								value={this.state.password}
  								onChange={this.update("password")}
  								className="signup-input"
                  placeholder="password"/>

  						<br/>
  						<input className="signup-submit" type="submit" value="Submit" />
  					</div>
  				</form>
  			</div>
  		);
  	}
  }
}

export default Signup;
