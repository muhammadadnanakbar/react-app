import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from "reactstrap";

// constructor(){
//     super()
//     this.state = {
//         task:[]
//     }
// }


class Index extends React.Component{

    constructor() {
        super()
        this.state={
            tasks:[]
        }
    }

    loadTask(){
        axios.get('localhost:8000/api/tasks').then(response =>{
            this.setState({
                tasks:response.data
            });
        });
    }

    componentWillMount() {
        this.loadTask()
    }

    render() {

        let tasks = this.state.tasks.map((task) => {

        })
        return (
            <div className="App container">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Adnan</td>
                            <td>this is good for sale</td>
                            <td>
                                <button color="success" size="sm" className="mr2">Edit</button>
                                <button color="danger" size="sm" className="mr2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default index;

if(document.getElementById('index')){
    ReactDOM.render(<Index/>, document.getElementById('index'));
}
