import React from 'react';
import '../zip.css';

function zip ({data}){
    console.log(data)
    let display = 
        data.map((item =>{
        let coordinates = item.Lat + ',' + item.Long;
        let totalWages = item.TotalWages;
        let poplulation = item.EstimatedPopulation;
        let locationText = item.LocationText;
        let state = item.State;
        return(
            <div className="Card">
                <div className="Top">
                    {locationText}
                </div>
                <div className="Body">
                    <li>State: {state}</li>
                    <li>Location: ({coordinates})</li>
                    <li>Poplulation (estimated): {poplulation}</li>
                    <li>Total Wages: {totalWages}</li>
                </div>
            </div>
        )
    }))
    return(
        <div>
            {display}
        </div>
    )
}

export default zip;