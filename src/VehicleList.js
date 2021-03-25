import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import './style.css';

function VehicleList({...props}) {
    let history = useHistory();
    let { fleetId } = useParams();
    return (
        <div>car list {fleetId}</div>
    )
}

export default VehicleList;
