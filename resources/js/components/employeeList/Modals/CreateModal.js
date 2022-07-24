import React, { Component } from 'react'; 
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class CreateModal extends Component{

    constructor(props){
        super(props);

        this.state = {
            employeeName:null,
            employeeSalary:null,
        }
    }
    //Create state
    inputEmployeeName = (event) =>{
        this.setState({
            employeeName:event.target.value 
        });
    }

    inputEmployeeSalary = (event) =>{
        this.setState({
            employeeSalary:event.target.value 
        });
    }

    //storing employee data
    storeEmployeeData = () =>{
        axios.post('/store/employee/data',{
            employeeName : this.state.employeeName,
            employeeSalary : this.state.employeeSalary
        }).then(()=>{
            toast.success("Employee saved succesfully");
            setTimeout(()=>{
                location.reload();
            },2500)
        })
    }


    render(){
        return( 
            <>
            <div className='row text-right mb-3 pb-3'>
                <button
                    className='btn btn-info text-right col-3 offset-md-9'
                    data-bs-toggle="modal" 
                    data-bs-target="#createModal"
                >
                    Add New Employee
                </button>
            </div>
            <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Employee Create</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form className="form">
                        <div className="form-group">
                            <input type="text" id="employeeName"  
                            placeholder="Name Here"
                            className="form-control mb-3"
                            onChange={this.inputEmployeeName} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="employeeSalary" 
                            placeholder="Salary Here"
                            className="form-control mb-3"
                            onChange={this.inputEmployeeSalary} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <input type="button" id="employeeName"   
                        className='btn btn-info'
                            value="save"
                            onClick={this.storeEmployeeData} />
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                </div>
                </div>
            </div>
            </div>
            </>
        )
    }

}


export default CreateModal;