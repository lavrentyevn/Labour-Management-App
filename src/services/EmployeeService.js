import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1';
const EMPLOYEE_LOGIN = 'http://localhost:8080/api/auth';

class EmployeeService {

    getEmployees(auth) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees", {
            headers: {
                Authorization: auth
            }
        })
    }

    addEmployee(auth, employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/add-employee", employee, {
            headers: {
                Authorization: auth
            }
        })
    }

    login(user) {
        return axios.post(EMPLOYEE_LOGIN + "/signin", user)
    }

    logout() {
        return axios.get(EMPLOYEE_LOGIN + "/logout")
    }

    updateEmployee(auth, employee, id) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/employees/" + id, employee, {
            headers: {
                Authorization: auth
            }
        })
    }

    getEmployeesById(auth, id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees/" + id, {
            headers: {
                Authorization: auth
            }
        })
    }
    deleteEmployee(auth, id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/employees/" + id, {
            headers: {
                Authorization: auth
            }
        })
    }
    viewEmployee(auth, id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees/" + id, {
            headers: {
                Authorization: auth
            }
        })
    }
}

export default new EmployeeService()