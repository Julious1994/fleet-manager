import React from "react";
import { useHistory } from "react-router-dom";
import data from "./jsonData";
import "./style.css";

function FleetList({ ...props }) {
  const history = useHistory();
  const [fleetList, setFleetList] = React.useState([...data]);

  const redirectCars = (fleetId) => {
    history.push({
      pathname: `/fleet-vehicles/${fleetId}`,
    });
  };

  return (
    <div>
      <div>
        {fleetList.map((fleet, i) => (
          <div className="fleet-item" onClick={() => redirectCars(fleet.fleetId)}>{fleet.name}</div>
        ))}
      </div>
    </div>
  );
}

export default FleetList;
