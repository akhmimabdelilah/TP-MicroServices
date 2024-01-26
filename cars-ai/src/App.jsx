
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css' // Import custom CSS for additional styling
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import Home from './pages/Home';
import ListClients from './pages/clients/ListClients';
function App() {
 
  return (
    <>
      
   <Router>
<Routes>
<Route path="/" element={<Home />} />
                <Route path="/clients" element={<ListClients />} />
              {/*  <Route path="/filieres" element={<FiliereList />} />
              <Route path="/roles" element={<RoleList />} />
              <Route path="/students/create" element={<CreateStudent />} />
              <Route path="/filieres/create" element={<CreateFiliere />} />
              <Route path="/roles/create" element={<CreateRole />} />
              <Route path="/students/update/:id" element={<UpdateStudent />} />
              <Route path="/filieres/update/:id" element={<UpdateFiliere />} />
              <Route path="/roles/update/:id" element={<UpdateRole />} />
               <Route path="/students/filterFiliere" element={<StudentByFiliere />} />*/}
            </Routes>
 </Router>
    </>
  )
}

export default App
