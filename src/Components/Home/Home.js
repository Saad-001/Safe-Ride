import React from 'react';
import './Home.css';
import data from '../../fakeData/fakeData.json';
import { useState } from 'react';
import { useEffect } from 'react';
import VehiclesInfo from '../vehicleInfo/VehiclesInfo';
import { useHistory } from 'react-router';

const Home = () => {
    const [vehicleInfo, setVehicleInfo] = useState([]);
    useEffect(() => {
        setVehicleInfo(data)
    },[])
    const history = useHistory();
    const handleClick = () =>{
        history.push('/login')
    }
    return (
        <div className="container main-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">SAFE RIDE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Destination</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button type="submit" onClick={handleClick} className="btn btn-danger">Log in</button>
                </div>
            </nav>

            <div className="info-div mt-5 row d-flex justify-content-around">
             {
                vehicleInfo.map(info => <VehiclesInfo info={info}></VehiclesInfo>)
             }
            </div>
        </div>
    );
};

export default Home;