import { Link } from 'react-router-dom';


function Sidebar() {
  return (
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1">
                    Clients Manager
                  </h6>
                  <ul className="sub-menu">
                    <li className="nav-item">
                      <Link to="/clients" className="nav-link">List of Clients</Link>
                    </li>
                  
                    <li className="nav-item">
                      <Link to="/students/create" className="nav-link">Create a Client</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1">
                     Cars Manager
                  </h6>
                  <ul className="sub-menu">
                    <li className="nav-item">
                      <Link to="/filieres" className="nav-link">List of Cars</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/filieres/create" className="nav-link">Create a Car</Link>
                    </li>
                  </ul>
                </li>
               
              </ul>
            </div>
          </nav>

          
  );
}

export default Sidebar;
