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
            <div className="mb-5">
                <form class="container mt-5">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name"></input>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
                    </div>

                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="phone" placeholder="Enter your phone number"></input>
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <textarea class="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddStudent
