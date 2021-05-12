import React, { useContext, useState } from 'react';
import './RideDetails.css';
import { userContext } from '../../App';

const RideDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
        // i was forced to console this for deploying site in netlify
        console.log(setLoggedInUser)

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
        <div style={{backgroundColor: "rgb(197, 238, 249)"}} className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
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
                            <li className="nav-item">
                                <h3 style={{color: "salmon"}}>{loggedInUser.name}</h3>
                            </li> 
                        </ul>

                    </div>
                    
                </div>
            </nav>
           <div className="container">
            <div className="row justify-content-around mt-5">
                        <div className="col-md-4 p-3 p-0 mt-3 search-div">
                            <div className="child-div">
                                <span className="fw-bold">Pic from</span>
                                <input type="text" name="pic-from" onBlur={handleBlur} />
                                <br />
                                <span>Pic to</span>
                                <br />
                                <input type="text" onBlur={handleBlur} name="pic-to" />
                                <br />
                                <span>Date</span>
                                <input type="date" />
                                <br />
                                <button onClick={handleSearch}>Search</button>
                                <div style={{ display: "none", width: "300px", paddingLeft: "20px", backgroundColor: "", borderRadius: "10px", padding: "5px" }} id="search-details">
                                    <p style={{ color: "salmon", marginTop: "10px", fontWeight: "bold" }}>{searchValue.picFrom}</p>
                                    {searchValue.picFrom ? <p style={{ color: "salmon", fontWeight: "bold" }}>to</p> : ""}
                                    <p style={{ color: "salmon", fontWeight: "bold" }}>{searchValue.picTo}</p>
                                </div>
                            </div>
                        </div>
                    
                    <div className="col-md-8 p-0 map-img">
                       <div className="p-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944846413!2d90.36710721941003!3d23.74705004446573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1620819562158!5m2!1sen!2sbd"  title="iframe" style={{border: "2px solid salmon", height: "550px", width: "100%", loading: "lazy"}}>
                            </iframe>
                       </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default RideDetails;