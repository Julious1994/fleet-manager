import React, {useState} from "react";
import data from "./jsonData";

const FleetContext = React.createContext();

function FleetProvider({ children }) {
    const [state, setState] = useState({
        fleetList: [...data],
	});

    const setVehicle = React.useCallback((vehicles, fleetId) => {
        // setState({})
    }, []);

    const value = {
		state,
        setVehicle,
	};

    return (
		<FleetContext.Provider value={value}>{children}</FleetContext.Provider>
	);

}

export function useUserStore() {
	return React.useContext(FleetContext);
}


export default FleetProvider;