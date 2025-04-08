import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrimaryNavbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#B3A369' }}>
      <div className="container-fluid">
        <a className="navbar-text text-white" style={{color: "#FFFFFF"}}>
          GT
        </a>
        <div className="d-flex justify-content-center w-100">
          <a className="navbar-brand fw-bold text-white" style={{color: "#FFFFFF"}}>
            Community Connect
          </a>
        </div>
      </div>
    </nav>
  );
}

export default PrimaryNavbar;