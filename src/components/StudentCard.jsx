import React from 'react'

const StudentCard = () => {
    return (
        <div className='card m-2 p-0 col-md-3 col-lg-3 col-sm-2 rounded' style={{ width: '250px' }}>
            <img className='rounded-top w-100' src="https://raw.githubusercontent.com/antonshell/placeholder-service/master/resources/test_images/img_height=400.png" alt="Student Photo" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body">
                <h3>
                    Student Name
                </h3>
                <span>
                    Email: student@gmail.com
                </span> <br />
                <span>
                    Phone: 01254756555
                </span>
                <div className="mt-3">
                    <button type='button' className='btn btn-dark'>
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
