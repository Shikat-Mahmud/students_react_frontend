import React from 'react'
import { BiSolidUserDetail } from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'

const StudentCard = ({ student, students, setStudents }) => {
    const handleStudentDelete = (id) => {
        if(confirm("Are you sure you want to delete the student info?")) {
            const res = fetch("http://127.0.0.1:8000/api/delete_student/"+id,{
                method: 'DELETE'
            });
            const newStudents = students.filter((student) => student.id != id);
            setStudents(newStudents);

            toast.success("Student deleted successfully");
        }
    }
    return (
        <div className='card m-3 p-3 col-md-3 col-lg-3 col-sm-2' style={{ width: '220px', borderRadius: '10px', backgroundColor: '#efefef' }}>
            <img className='rounded w-100' src="https://caps.msu.edu/_assets/images/placeholder/placeholder-400x400.jpg" alt="Student Photo" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body p-0 mt-2">
                <h5>
                    {student.name}
                </h5>
                <span>
                    {student.email}
                </span> <br />
                <span>
                    {student.phone}
                </span>
                <div className="mt-2 d-flex justify-content-between">
                    <a href={`/details/${student.id}`} className='btn btn-info d-flex align-items-center'><BiSolidUserDetail /></a>
                    <div className="d-flex">
                        <a href={`/edit_student/${student.id}`} className='btn btn-success d-flex align-items-center'><FaEdit /></a>
                        <a href="#" className='btn btn-danger d-flex align-items-center ms-2' onClick={() => handleStudentDelete(student.id)}><MdDelete /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
