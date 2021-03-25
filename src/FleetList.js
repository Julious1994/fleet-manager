import React from 'react';
import { useHistory } from "react-router-dom";
import data from "./jsonData";

function FleetList({...props}) {
    const [fleetList, setFleetList] = React.useState([]);

    const redirectCars = () => {
        history.push({
            pathname: `/cars/2`,
          })
    }

    return (
        <div>car list</div>
    )
}

export default FleetList;
