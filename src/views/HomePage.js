// import React, { useState, useEffect } from 'react';
// import Searchbar from '../components/Searchbar';
// import PlantCard from '../components/PlantCard';

// const HomePage = () => {
//     const [selectedPlant, setSelectedPlant]= useState("");
//     const [count, setCount]= useState(0);

//     useEffect(() => {
//         if (selectedPlant === "") {
//             return "Choose a Plant";
//         }
//     }, [])

//     return (
//         <>
//             <Searchbar selectedPlant= {selectedPlant} setSelectedPlant= {setSelectedPlant} />
//             <PlantCard selectedPlant= {selectedPlant} setSelectedPlant= {setSelectedPlant} />
//         </>
//     )
// }
// export default HomePage;