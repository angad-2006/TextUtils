
import React from 'react';
//import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TextUtils
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            {/*<li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>*/}
          </ul>

          {/*<form className="d-flex" role="search"
            onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>*/}

         
<div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="switchMdLabel"
    onChange={props.toggleMode}
    checked={props.mode === 'dark'}
  />

  <label className="form-check-label" htmlFor="switchMdLabel">
    Enable DarkMode
  </label>
</div>



        </div>
      </div>
    </nav>
  );
}
