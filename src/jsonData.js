const vehicles = [
    {number: 'ER 2020', location: 'New york', status: 'inactive'},
    {number: 'ER 2021', location: 'Palo Alto', status: 'available'},
    {number: 'ER 2022', location: 'New Jersey', status: 'available'},
]
const data = [
    {fleetId: 1, name: 'Pet2Vet', vehicles: [...vehicles]},
    {fleetId: 2, name: 'Grocery', vehicles: [...vehicles.slice(1)]},
    {fleetId: 3, name: 'Medicine', vehicles: [...vehicles]},
    {fleetId: 4, name: 'Boat', vehicles: [...vehicles]},
];

export default data;
