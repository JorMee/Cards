import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    onSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.history.push('/cards')
                }
            }) 
    }
    render () {
        return (
            <article className="bg-white tc center ba b--black-20 br3 pa1 mw5 ma3 pa3">
                <h1 className='text-success'>Sign in</h1>
                <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input 
                                onChange={this.onEmailChange} 
                                className="pa2 input-reset ba br3 btn-outline-success w-100 measure" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                onChange={this.onPasswordChange} 
                                className="b br3 pa2 input-reset ba btn-outline-success measure w-100" 
                                type="password" 
                                name="password"
                                id="password"
                            />
                        </div>
                    </fieldset>
                    <div className="mt3 pa2">
                        <p><Link to='#' className="b ph3 pv2 input-reset ba br-pill btn-outline-success pointer f6 ma2" onClick={this.onSignIn}> Sign In</Link></p>
                        <small className='db'>Don't have an account? <Link to='/signup' className='link pointer dim text-success'>Sign up</Link></small>
                    </div>
                </form>
            </article>
    
        )
    }
}

export default SignIn;