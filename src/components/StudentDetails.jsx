import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom'

const StudentDetails = () => {
    const param = useParams();
    const [student, setStudent] = useState([]);
    const fetchStudent = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/student/" + param.id);
        const result = await res.json();
        setStudent(result.data);
        // console.log(result.data);
    }

    useEffect(() => {
        fetchStudent();
    }, []);

    return (
        <div className="container">
            <div className="m-3 d-flex justify-content-between">
                <h3>
                    Student Details
                </h3>
                <a href='/' className='btn btn-primary d-flex align-items-center'>
                    <IoArrowBackOutline className='me-2' /> All Students
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="mt-3 d-flex flex-column text-align-center rounded" style={{ width: '100%', maxWidth: '800px', backgroundColor: '#e5e5e5', padding: '40px' }}>
                    <div className='d-flex justify-content-center' style={{ margin: '30px' }}>
                        <div className="text-center position-relative" style={{ display: 'inline-block' }}>
                            <img className='rounded-circle p-1'
                                src="https://caps.msu.edu/_assets/images/placeholder/placeholder-400x400.jpg"
                                alt="Student Photo"
                                style={{ height: '200px', width: '200px', objectFit: 'cover', border: '4px solid #0B5ED7' }} />
                            <span className='position-absolute'
                                style={{
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: 'green',
                                    bottom: '20px',
                                    right: '20px',
                                    border: '3px solid white',
                                }}>
                            </span>
                        </div>
                    </div>

                    <div className="mt-3">
                        <h3 style={{ marginBottom: '20px' }} className='text-center'>{student.name}</h3>
                        <span>Email: <strong>{student.email}</strong></span> <br />
                        <span>Phone: <strong>{student.phone}</strong></span> <br />
                        <span>Address: <strong>{student.address}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails
