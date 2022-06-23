import React from "react";
import StartFirebase from "../firebase-config.js/index";  
import { ref,set,update,remove } from "firebase/database";
import './index.css';

export class Crud extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            db:'',
            username:'',
            lastname:'',
            address:'',
            phonenumber:'',
            aadharno:'',
            panno:'',
        }

        this.interface = this.interface.bind(this);

    }

    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }

    render(){
        return(
            <>
            <label> Enter Username </label>
            <input type = 'text' id="userbox" value={this.state.username} 
            onChange={e =>{this.setState({username: e.target.value});}}/>
            <br/><br/>

            <label> Enter Lastname </label>
            <input type = 'text' id="namebox" value={this.state.lastname} 
            onChange={e =>{this.setState({lastname: e.target.value});}}/>
            <br/><br/>

            <label> Enter Address </label>
            <input type = 'text' id="addressbox" value={this.state.address} 
            onChange={e =>{this.setState({address: e.target.value});}}/>
            <br/><br/>

            <label> Enter Phone number </label>
            <input type = 'number' id="phonebox" value={this.state.phonenumber} 
            onChange={e =>{this.setState({phonenumber: e.target.value});}}/>
            <br/><br/>

            <label> Enter Aadhar NO </label>
            <input type = 'number' id="aadharrbox" value={this.state.aadharno} 
            onChange={e =>{this.setState({aadharno: e.target.value});}}/>
            <br/><br/>

            <label> Enter Pan No </label>
            <input type = 'number' id="panbox" value={this.state.panno} 
            onChange={e =>{this.setState({panno: e.target.value});}}/>
            <br/><br/>

            <button id = "addBtn" onClick={this.interface}>Add Data</button>
            <button id = "updateBtn" onClick={this.interface}>Update Data</button>
            <button id = "deleteBtn" onClick={this.interface}>Delete Data</button>

            
            </>
        )
    }

    interface(event){
        const id = event.target.id;

        if(id === 'addBtn'){
            this.insertData();
        }
        else if(id==='updateBtn'){
            this.updateData();
        }
        else if(id==='deleteBtn'){
            this.deleteData();
        }
    }

    getAllInputs(){
        return{
        username: this.state.username,
        name: this.state.lastname,
        phone:Number(this.state.phonenumber),
        address: this.state.address,
        aadharno: Number(this.state.aadharno),
        panno: Number(this.state.panno),
    }   
    }
        insertData(){
            const db = this.state.db;
            const data = this.getAllInputs();

            set(ref(db, 'Employee/'+data.username),
            {
                lastname:data.name,
                phonenumber:data.phone,
                address:data.address,
                aadharno:data.aadharno,
                panno:data.panno
            })
            .then(() => {alert('Data was added successflly')})
            .catch((error)=>{alert("There is an error,details: "+error)});

        }

        updateData(){
            const db = this.state.db;
            const data = this.getAllInputs();

            update(ref(db, 'Employee/'+data.username),
            {
                lastname:data.name,
                phonenumber:data.phone,
                address:data.address,
                aadharno:data.aadharno,
                panno:data.panno    

            })
            .then(() => {alert('Data was updated successflly')})
            .catch((error)=>{alert("There is an error,details: "+error)});

        }

        deleteData(){
                const db = this.state.db;
                const username  = this.getAllInputs().username;
    
                remove(ref(db, 'Employee/'+username))
               .then(() => {alert('Data was deleted successflly')})
               .catch((error)=>{alert("There is an error,details: "+error)});

        }
        
    }

