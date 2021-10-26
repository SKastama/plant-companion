// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Searchbar = (props) => {
//     const [plantList, setPlantList] = useState([]);
//     const [searchList, setSearchList] = useState([]);
//     const [search, setSearch] = useState('');
//     const [firstRender, setFirstRender] = useState(true);

//     const handleSearchChange = async (e) => {
//         setSearch(e.target.value);
//         e.target.value = search;
//     }

//     const handlePlantSelect = (e, id) => {
//         e.preventDefault();
//         props.setSelectedPlant(id);
//         console.log(id);
//     }

//     useEffect(() => {
//         if (firstRender) {
//             setFirstRender(false);
//             axios.get('http://localhost:8000/api/plant')
//                 .then(res => {
//                     setPlantList(res.data);
//                     setSearchList(res.data);
//                 })
//                 .catch(err => console.log(err.response));
//         } 
//         else {
//             var newSearchList = [];
//             setSearchList(plantList.forEach(plant => {
//                 var fullName = plant.name + ' ' + plant.sciName;
//                 if (fullName.toLowerCase().includes(search.toLowerCase())) {
//                     newSearchList.push(plant);
//                 }
//             }));
//             setSearchList(newSearchList);
//         }
//         console.log(plantList);
//     }, [search])

//     return (
//         <div>
//             <div>
//                 <input placeholder="Enter Post Title" value={search} onChange={handleSearchChange}/>
//                 {searchList.map(plant => {
//                     return (
//                         <p
//                             label={plant.name + ' ' + plant.sciName}
//                             variant='outline'
//                             style={{height: '50px', fontSize: '20px', justifyContent: 'start', paddingLeft: '30px', color: 'black'}}
//                             clickable
//                             component='a'
//                             href='#'
//                             onClick={e => handlePlantSelect(e, plant._id)}
//                         >{plant.name}</p>
//                     )
//                 })}
//             </div>
//         </div>
//     )

// }
// export default Searchbar;