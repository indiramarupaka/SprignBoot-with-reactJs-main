import React from 'react';
import userservice from '../services/UserServices';
import {Navbar, Nav,Form,FormControl,Button}  from 'react-bootstrap';
import Header from './Header';

class UserComponents extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
        
    }
    componentDidMount(){
        userservice.getUsers().then((Response) =>{
            this.setState({users:Response.data})
        });
    }
    render(){
        return(
            <div>
                <Header/>
                <h1 className = "text-center">Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>email Id</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserComponents