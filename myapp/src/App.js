import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import AddStudentsData from './Pages/AddStudentsData';
import ManageStudents from './Pages/ManageStudents';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Popup from './Components/Popup';
function App() {
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
