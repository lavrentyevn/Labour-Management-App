import React, { Component } from 'react';
import { withRouter } from './withRouter';
import administrator from './LoginInfo';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admin_password_from_spring: 'YWRtaW46YWRtaW4='
        }

        this.login = this.login.bind(this);
    }
    login() {
        this.props.navigate("/login")
    }
    render() {
        const isLoggedIn = administrator.login_password;
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className='navbar-brand mb-0 h1' style={{marginLeft: "10px"}}>Labour Management App</div>
                        <div>
                            {isLoggedIn != this.state.admin_password_from_spring ? (
                                <button className='btn btn-primary' onClick={this.login}>Login</button>
                            ) : (
                                <button className='btn btn-secondary'>Logged in</button>
                            )
                        }   
                        </div>
                    </nav>
            </div>
        );
    }
}

export default withRouter(Header);