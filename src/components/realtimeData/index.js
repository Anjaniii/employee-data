import StartFirebase from "../firebase-config.js/index";
import React from "react";
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'Employee');

        onValue(dbRef,(snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data":data});
            });
            this.setState({tableData:records});
        });
    }

    render(){
        return(
            <Table className='container w-75' bordered striped variant="light">
                <thead>
                    <tr>
                        <th>Data from Data base</th>
                    </tr>
                </thead>

                <body>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{row.key}</td>
                                <td>{row.data.Lastname}</td>
                                <td>{row.data.phonenumber}</td>
                                <td>{row.data.address}</td>
                                <td>{row.data.aadharno}</td>
                                <td>{row.data.panno}</td>

                            </tr>
                        )
                    })}
                </body>


            </Table>
        )
    }
}