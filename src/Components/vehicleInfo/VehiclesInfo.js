import React from 'react';
import './VehicleInfo.css'

const VehiclesInfo = (props) => {
    console.log(props)
    const { name, image } = props.info;

    return (
        <div className="col-md-3 mt-3 mb-3 ">
            <div style={{ backgroundColor: "white" }} className="border-info">
                <a style={{ textDecoration: "none", display: "inline-block" }} href="/login">
                    <div className="vehicle-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="vehicle-title pt-1 pb-1">
                        <h4>{name}</h4>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default VehiclesInfo;