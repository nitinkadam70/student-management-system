import logo from './logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddStudentsData from './Pages/AddStudentsData';
import ManageStudents from './Pages/ManageStudents';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Popup from './Components/Popup';
import EditData from './Components/EditData';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/addStudents');
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route
              path="/addStudents"
              element={<AddStudentsData />}
            />
            <Route path="/mngstudents" element={<ManageStudents />} />
            <Route path="/mngstudents/:id" element={<EditData />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
