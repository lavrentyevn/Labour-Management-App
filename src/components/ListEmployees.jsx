import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from './withRouter';
import administrator from './LoginInfo';

class ListEmployees extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            time: new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                }),
            auth: ''
        }
        this.update = this.update.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount() {
        this.state.auth = administrator.login_password;

        console.log(this.state.auth)
        EmployeeService.getEmployees("Basic " + this.state.auth).then((res) => {
            this.setState({employees: res.data});
        });
    }
    update() {
        this.state.time = new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            });
        EmployeeService.getEmployees("Basic " + this.state.auth).then((res) => {
            this.setState({employees: res.data});
            this.props.navigate("/");
        });
    }
    addEmployee() {
        this.props.navigate("/create-employee");
    }
    editEmployee(id) {
        this.props.navigate(`/update-employee/${id}`);
    }
    deleteEmployee(id) {
        EmployeeService.deleteEmployee("Basic " + this.state.auth, id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
    }
    viewEmployee(id) {
        this.props.navigate(`/view-employee/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className='text-center' style={{marginTop: "20px"}}>List of Employees</h2>
                <h6 className='text-end fst-italic' style={{marginRight: "20px"}}>Last Updated: {this.state.time}</h6>
                <div>
                    <button className='btn btn-primary' style={{marginBottom: "10px", marginLeft:"10px"}} onClick={this.addEmployee}>Add Employee</button>
                    <button className='btn btn-secondary' style={{marginBottom: "10px", marginLeft:"10px"}} onClick={this.update}>Update</button>
                </div>
                <table class="table table-bordered" style={{marginLeft:"10px"}}>
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Job Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.birthday}</td>
                                <td>{employee.jobPosition}</td>
                                <td>
                                    <button onClick={() => this.editEmployee(employee.id)} className = "btn btn-info">Update</button>
                                    <button onClick={() => this.deleteEmployee(employee.id)} className = "btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                                    <button onClick={() => this.viewEmployee(employee.id)} className = "btn btn-warning" style={{marginLeft: "10px"}}>View</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(ListEmployees);