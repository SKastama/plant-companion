// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const PlantCard = (props) => {
//     const [plantInfo, setPlantInfo] = useState({
//         plantId: '',
//         name: '',
//         sciName: '',
//         companion: [],
//         enemy: [],
//         comments: ''
//     });

//     useEffect(() => {
//         console.log(props.selectedPlant);
//         axios.post('http://localhost:5000/api/plant/one', {_id: props.selectedPlant})
//             .then(res => {
//                 setPlantInfo(res.data)})
//             .catch(err => console.log(err.response));
        
//     }, [props.selectedPlant])

//     return (
//         <div>
//             <h1>{plantInfo.name}</h1>
//         </div>
//     )
// }
// export default PlantCard;