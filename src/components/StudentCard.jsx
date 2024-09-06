import React from 'react'

const StudentCard = () => {
    return (
        <div className='card m-2 p-3 col-md-3 col-lg-3 col-sm-2' style={{ width: '220px', borderRadius: '10px', backgroundColor: '#efefef' }}>
            <img className='rounded w-100' src="https://caps.msu.edu/_assets/images/placeholder/placeholder-400x400.jpg" alt="Student Photo" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body p-0 mt-2">
                <h5>
                    Student Name
                </h5>
                <span>
                    Email: student@gmail.com
                </span> <br />
                <span>
                    Phone: 01254756555
                </span>
                <div className="mt-2">
                    <button type='button' className='btn btn-dark'>
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
