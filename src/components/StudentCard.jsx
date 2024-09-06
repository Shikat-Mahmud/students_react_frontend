import React from 'react'

const StudentCard = ({ student }) => {
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
                <div className="mt-2">
                    <a href={`/details/${student.id}`} className='btn btn-dark'>Details</a>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
