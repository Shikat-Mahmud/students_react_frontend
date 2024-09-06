import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './components/Students';
import { Route, Routes } from 'react-router-dom';
import StudentDetails from './components/StudentDetails';

function App() {

  return (
    <>
      <div className="main">
        <h1 className='text-center h1 bg-dark text-white p-3 '>Students Info</h1>
      </div>
      <Routes>
        <Route path='/' element={<Students/>} />
        <Route path='/details/:id' element={<StudentDetails/>} />
      </Routes>
    </>
  )
}

export default App
