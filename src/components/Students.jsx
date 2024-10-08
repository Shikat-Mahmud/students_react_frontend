import React from 'react'
import StudentCard from './StudentCard';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Students = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/students");
        const result = await res.json();
        setStudents(result.data);
        // console.log(result.data);
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="container">
            <div className="m-3 d-flex justify-content-between">
                <h3>
                    All Students
                </h3>
                <a href='/add_student' className='btn btn-primary d-flex align-items-center'>
                    <FaPlus className='me-2' /> Add Students
                </a>
            </div>
            <div className="row">
                {
                    students && students.length > 0 ? (
                        students.map((student) => (
                            <StudentCard key={student.id} student={student} students={students} setStudents={setStudents} />
                        ))
                    ) : (
                        <p className='d-flex justify-content-center align-item-center'>Students not found.</p>
                    )
                }
            </div>
        </div>
    )
}

export default Students
