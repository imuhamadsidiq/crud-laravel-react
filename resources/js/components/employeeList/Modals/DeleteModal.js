import React, { Component } from 'react'; 
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DeleteModal extends Component{

    constructor(props){
        super(props);
    }

    //delete function for delete data
   deleteEmployeeData = (employee) => {
    axios.delete('/delete/employee/data/'+employee).then(()=>{
        toast.error("Employee delted succesfully");
        setTimeout(()=>{
            location.reload();
        },2500)
    })
   }

    render(){
        return( 
            <div className="modal fade" id={"deleteModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Employee Delete</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Name : <strong>{this.props.employeeData.currentEmployeeName}</strong>
                    <hr></hr>
                    Salary : <strong>{this.props.employeeData.currentEmployeeSalary}</strong>
                    <hr></hr>
                    Are you sure you want to delete this Employee data ?

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={()=>{this.deleteEmployeeData(this.props.modalId)}}>Yes</button> 
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                </div>
                </div>
            </div>
            </div>
        )
    }

}


export default DeleteModal;