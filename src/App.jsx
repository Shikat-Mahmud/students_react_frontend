import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from './components/StudentCard';

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
          <StudentCard />
        </div>
      </div>
    </div>
  )
}

export default App
