const vehicles = [
    {number: 'ER 2020', location: 'New york', status: 'inactive'},
    {number: 'ER 2021', location: 'Palo Alto', status: 'available'},
    {number: 'ER 2022', location: 'New Jersey', status: 'available'},
]
const data = [
    {fleetId: 1, service_type: 'Pet2Vet', vehicles: [...vehicles]},
    {fleetId: 2, service_type: 'Grocery', vehicles: [...vehicles.slice(1)]},
    {fleetId: 3, service_type: 'Medicine', vehicles: [...vehicles]},
    {fleetId: 4, service_type: 'Boat', vehicles: [...vehicles]},
];

export default data;
