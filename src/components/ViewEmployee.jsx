import React, { Component } from 'react';
import { withRouter } from './withRouter';
import EmployeeService from '../services/EmployeeService';
import administrator from './LoginInfo';

class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        let {id} = props.params;
        this.state = {
            id: id,
            employee: {},
            auth: ''
        }
        this.goBack = this.goBack.bind(this);
    }
    componentDidMount() {
        this.state.auth = administrator.login_password
        EmployeeService.getEmployeesById("Basic " + this.state.auth, this.state.id).then(res => {
            this.setState({employee: res.data});
        });
    }
    goBack() {
        this.props.navigate("/");
    }
    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3' style = {{marginTop: "10px"}}>
                    <h3 className='text-center'>View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <h5>First Name: </h5>
                            <div> {this.state.employee.firstName}</div>
                        </div>
                        <br></br>
                        <div className='row'>
                            <h5>Last Name: </h5>
                            <div> {this.state.employee.lastName}</div>
                        </div>
                        <br></br>
                        <div className='row'>
                            <h5>Email: </h5>
                            <div> {this.state.employee.email}</div>
                        </div>
                        <br></br>
                        <div className='row'>
                            <h5>Birthday: </h5>
                            <div> {this.state.employee.birthday}</div>
                        </div>
                        <br></br>
                        <div className='row'>
                            <h5>Job Position: </h5>
                            <div> {this.state.employee.jobPosition}</div>
                        </div>
                        <br></br>
                        <div className='btn btn-info' onClick={this.goBack}>Back</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ViewEmployee);