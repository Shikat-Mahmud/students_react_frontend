import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditStudent = () => {
    const navigate = useNavigate();
    const param = useParams();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const [status, setStatus] = useState('active');    

    const fetchStudent = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/student/"+param.id);
        const result = await res.json();
        reset(result.data);
        setStatus(result.data.status);
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }

    const studentFormSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('status', status);
        formData.append('address', data.address);        

        try {
            const res = await fetch("http://127.0.0.1:8000/api/edit_student/"+param.id, {
                method: "POST",
                body: formData
            });

            // Check if response is JSON
            const contentType = res.headers.get("content-type");

            if (contentType && contentType.indexOf("application/json") !== -1) {
                const response = await res.json();

                // Adjust the condition based on actual response structure
                if (response.status === true || response.status === 'true') {
                    toast.success("Student updated successfully.");
                    navigate('/');
                } else {
                    // Handle errors if any
                    if (response.errors) {
                        Object.keys(response.errors).forEach((key) => {
                            if (Array.isArray(response.errors[key])) {
                                response.errors[key].forEach((error) => {
                                    toast.error(error);
                                });
                            } else {
                                toast.error(response.errors[key]);
                            }
                        });
                    } else {
                        toast.error("An unknown error occurred.");
                    }
                }
            } else {
                // Handle unexpected content type (e.g., HTML error page)
                const textResponse = await res.text();
                console.error("Unexpected response:", textResponse);
                toast.error("An error occurred. Please check the server response.");
            }

        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("An error occurred. Please try again.");
        }
    }

    useEffect(() =>{
        fetchStudent();
    },[]);

    return (
        <div className="container">
            <div className="m-3 d-flex justify-content-between">
                <h3>
                    Edit Student
                </h3>
                <a href='/' className='btn btn-primary d-flex align-items-center'>
                    <IoArrowBackOutline className='me-2' /> All Students
                </a>
            </div>
            <div className="mb-5">
                <form onSubmit={handleSubmit(studentFormSubmit)} className="container mt-5">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name: <span className='text-danger'>*</span></label>
                        <input {...register('name', { required: true })} type="text" className="form-control" id="name" placeholder="Enter your name"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email: <span className='text-danger'>*</span></label>
                        <input {...register('email', { required: true })} type="email" className="form-control" id="email" placeholder="Enter your email"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input {...register('phone')} type="text" className="form-control" id="phone" placeholder="Enter your phone number"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-select" id="status" aria-label="Status" value={status} onChange={handleStatusChange}>
                            <option value={'active'}>Active</option>
                            <option value={'inactive'}>Inactive</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <textarea {...register('address')} className="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
                    </div>

                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default EditStudent
