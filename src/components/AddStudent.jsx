import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

const AddStudent = () => {
    return (
        <div className="container">
            <div className="m-3 d-flex justify-content-between">
                <h3>
                    Add Student
                </h3>
                <a href='/' className='btn btn-primary d-flex align-items-center'>
                    <IoArrowBackOutline className='me-2' /> All Students
                </a>
            </div>
        </div>
    )
}

export default AddStudent
