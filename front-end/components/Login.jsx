import React, { Component } from 'react';
import { withRouter } from './withRouter';
import administrator from './LoginInfo';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
        this.sendLogin = this.sendLogin.bind(this);
    }
    sendLogin = (e) => {
        e.preventDefault();
        let auth = this.state.username + ":" + this.state.password;
        console.log(btoa(auth));

        administrator.login_password = btoa(auth);
        this.props.navigate("/");
    }
    changeInfo = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style = {{marginTop: "10px"}}>
                            <h3 className='text-center'>Login</h3>
                            <div className='card-body'>
                                <form>
                                <div className='form-group' style = {{marginTop: "10px"}}>
                                        <label>Login:</label>
                                        <input placeholder='Login'
                                        name='username'
                                        className='form-control'
                                        value={this.state.username}
                                        onChange={this.changeInfo}/>
                                    </div>
                                    <div className='form-group' style = {{marginTop: "10px"}}>
                                        <label>Password:</label>
                                        <input placeholder='Password'
                                        name='password'
                                        className='form-control'
                                        value={this.state.password}
                                        onChange={this.changeInfo}/>
                                    </div>
                                    <div className='btn btn-success' onClick={this.sendLogin} style = {{marginTop: "10px"}}>Go</div>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default withRouter(Login);