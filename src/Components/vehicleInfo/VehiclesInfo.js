import React from 'react';
import './VehicleInfo.css'

const VehiclesInfo = (props) => {
    console.log(props)
    const { name, image } = props.info;

    return (
            <div className="col-lg-3 vehicle">
               <div style={{backgroundColor: "rgba(0, 50, 71, 0.5)"}} className="m-1 rounded" >
                <a style={{ textDecoration: "none"}} className="text-warning fw-bolder" href="/login">
                        <div className="p-3 text-center vehicle-img">
                            <div className="icon">
                                <img className="img-fluid" src={image} alt="" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="p-2">{name}</h3>
                        </div>
                    </a>
               </div>
            </div>       
    );
};

export default VehiclesInfo;