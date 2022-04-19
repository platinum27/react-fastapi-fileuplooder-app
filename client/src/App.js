import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes ,Route, Link } from 'react-router-dom';
import Upload from './pages/Upload.js';
import Home from './pages/Home.js';
function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <nav className="nav">
                    <div className="nav-brand">Upload Manager</div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link to="/">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/upload">Upload</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/upload" element={<Upload/>}  />
                    <Route  path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
