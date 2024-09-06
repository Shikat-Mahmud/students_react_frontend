import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="main">
      <h1 className='text-center h1 bg-dark text-white p-3 '>Students Info</h1>
      <div className="container">
        <div className="m-3 d-flex justify-content-between">
          <h3>
            All Students
          </h3>
          <button type='button' className='btn btn-primary'>Add Student</button>
        </div>
        <div className="row">
          <div className="mt-3 col col-md-3">
            <div className='card m-2' style={{ width: '250px' }}>
              <img src="https://raw.githubusercontent.com/antonshell/placeholder-service/master/resources/test_images/img_height=400.png" alt="Student Photo" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
