import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useUserStore } from "./context";
import "./style.css";
import Dialog from './Dialog';

function VehicleList({ ...props }) {
  let history = useHistory();
  let { fleetId } = useParams();
  const { state } = useUserStore();
  const fleetList = state.fleetList;
  console.log(fleetList)
  const fleet = fleetList.find((fleet) => `${fleet.fleetId}` === fleetId);
  console.log(fleet, fleetId);
  return (
      <div>
        <h2>Vehicle List</h2>
        <table cellPadding="10" cellSpacing="0">
        <thead>
            <tr>
                <th>Name</th>
                <th>Current location</th>
                <th>Status</th>
                <th colSpan="2">
                <button type="button">Add new Vehicle</button>
                </th>
            </tr>
        </thead>
        <tbody>
            {fleet.vehicles.map((vehicle, i) => (
            <tr key={i}>
                <td>{vehicle.number}</td>
                <td>{vehicle.location}</td>
                <td>{vehicle.status}</td>
                <td>
                <button type="button">Change location</button>
                </td>
                <td>
                <button type="button">Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}

export default VehicleList;
