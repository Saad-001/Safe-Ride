import React, { useContext, useState } from 'react';
import './RideDetails.css';
import googleMapImg from '../../images/Map.png'
import { userContext } from '../../App';

const RideDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [searchValue, setSearchValue] = useState({
        picFrom: "",
        picTo: ""
    });

    const handleBlur = (e) => {
        if (e.target.name === "pic-from") {
            const picFromValue = { ...searchValue };
            picFromValue.picFrom = e.target.value;
            setSearchValue(picFromValue);
        }
        if (e.target.name === "pic-to") {
            const picToValue = { ...searchValue };
            picToValue.picTo = e.target.value;
            setSearchValue(picToValue);
        }
        console.log(searchValue.picFrom, searchValue.picTo)
    }
    const handleSearch = () => {
        document.getElementById("search-details").style.display = "block";
    }
    return (
        <div className="container">
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
                                <a className="nav-link" href="/">Destination</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <h3 style={{color: "salmon"}} className="float-end">{loggedInUser.name}</h3>
                </div>
            </nav>
            <div className="row container d-flex justify-content-around mt-5">
                <div className="col-md-4 p-3 search-div">
                    <div className="child-div">
                        <span>Pic from</span>
                        <input type="text" name="pic-from" onBlur={handleBlur} />
                        <br />
                        <span>Pic to</span>
                        <br />
                        <input type="text" onBlur={handleBlur} name="pic-to" />
                        <br />
                        <button onClick={handleSearch}>Search</button>
                        <div style={{ display: "none", width: "300px", paddingLeft: "20px", backgroundColor: "salmon", borderRadius: "10px", padding: "5px" }} id="search-details">
                            <p style={{ color: "white", marginTop: "10px", fontWeight: "bold" }}>{searchValue.picFrom}</p>
                            <p style={{ color: "white", fontWeight: "bold" }}>to</p>
                            <p style={{ color: "white", fontWeight: "bold" }}>{searchValue.picTo}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 map-img">
                    <img className="pb-5" src={googleMapImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RideDetails;