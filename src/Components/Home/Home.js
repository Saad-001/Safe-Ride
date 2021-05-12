import React from 'react';
import './Home.css';
import data from '../../fakeData/fakeData.json';
import { useState } from 'react';
import { useEffect } from 'react';
import VehiclesInfo from '../vehicleInfo/VehiclesInfo';
import { useHistory } from 'react-router';
import image from '../../images/Bg2.png';

const Home = () => {
    const [vehicleInfo, setVehicleInfo] = useState([]);
    useEffect(() => {
        setVehicleInfo(data)
    }, [])
    const history = useHistory();
    const handleClick = () => {
        history.push('/login')
    }
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundOrigin: "content-box" }} className="main-container">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">SAFE RIDE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                            <form className="d-flex">
                                <button type="submit" onClick={handleClick} className="btn btn-danger">Log in</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="div">
                <div className="container">
                    <div style={{ borderRadius: "10px"}} className="vehicleDiv row no-gutters">
                    {
                        vehicleInfo.map(info => <VehiclesInfo info={info}></VehiclesInfo>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;