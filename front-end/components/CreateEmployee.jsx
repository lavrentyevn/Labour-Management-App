import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from './withRouter';
import administrator from './LoginInfo';

class CreateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            birthday: '',
            jobPosition: '',
            auth: ''
        }
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee = (e) => {
        e.preventDefault();
        this.state.auth = administrator.login_password;
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email:this.state.email, birthday: this.state.birthday, jobPosition: this.state.jobPosition};
        console.log('employee => ' + JSON.stringify(employee));
        console.log("Basic " + this.state.auth);

        EmployeeService.addEmployee("Basic " + this.state.auth, employee).then(res => {
            this.props.navigate("/");
        });
    }
    changeInfo = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    cancel() {
        this.props.navigate("/");
    }
    render() {
        return (
            <div>
                 <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style = {{marginTop: "10px"}}>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group' style = {{marginTop: "10px"}}>
                                        <label>First Name:</label>
                                        <input placeholder='First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={this.state.firstname}
                                        onChange={this.changeInfo}/>
                                    </div>
                                    <div className='form-group' style = {{marginTop: "10px"}}>
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={this.state.lastname}
                                        onChange={this.changeInfo}/>
                                    </div>
                                    <div className='form-group' style = {{marginTop: "10px"}}>
                                        <label>Email:</label>
                                        <input placeholder='Email'
                                        name='email'
                                        className='form-control'
                                        value={this.state.email}
                                        onChange={this.changeInfo}/>
                                    </div>
                                    <div className='form-group' style = {{marginTop: "10px"}}>
                                        <label>Birthday:</label>
                                        <input placeholder='Birthday'
                                        name='birthday'
                                        className='form-control'
                                        value={this.state.birthday}
                                        onChange={this.changeInfo}/>
                                    </div>
                                    <div className='form-group' style = {{marginTop: "10px"}}>
                                        <label>Job Position:</label>
                                        <input placeholder='Job Position'
                                        name='jobPosition'
                                        className='form-control'
                                        value={this.state.jobPosition}
                                        onChange={this.changeInfo}/>
                                    </div>
                                    <div className='btn btn-success' onClick={this.saveEmployee} style = {{marginTop: "10px"}}>Save</div>
                                    <div className='btn btn-danger' onClick={this.cancel.bind(this)} style = {{marginLeft: "10px", marginTop: "10px"}}>Cancel</div>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default withRouter(CreateEmployee);