import React, { Component } from 'react';
import Form from '../../components/Form'
import Tile from '../../components/Tile'
import {fetchEmployees} from './actions';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        fetchEmployees()
        .then(res => this.setState({employees: res.data}))
    }

    render() {
        const { employees } = this.state;
        return (
            <div>
                <Form />
                {
                    employees.map(emp => (
                        <Tile 
                            key={emp.id}
                            name={emp.employee_name}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Home;