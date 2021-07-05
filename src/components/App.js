import '../css/App.css';
import React, { useState, useEffect } from 'react'
import ApiData from './ApiData';
import SocketData from './SocketData';
import ApiDataTabular from './ApiDataTabular';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    
    <Router>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-static-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">BCT</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/socket-data">Socket Data</Link>
              </li>

              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Api Data
              </Link>
              <div className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/api-data">Visual</Link>
                <Link className="dropdown-item" to="/api-data-tabular">Tabular</Link>
              </div>
              </li>

            </ul>
          </div>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/api-data">
          <ApiData />
        </Route>
        <Route path="/socket-data">
          <SocketData />
        </Route>
        <Route path="/api-data-tabular">
          <ApiDataTabular />
        </Route>
        <Route path="/">
          <ApiData />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
