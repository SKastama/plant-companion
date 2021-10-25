import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const Dashboard = () => {
    const [plant, setPlant] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/plant')
            .then(res=>{
                setPlant(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    
    if (loaded === false) {
        return "Page is Loading...";
    }

    return (
        <>
            <h1>hi</h1>
            <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)}/>
            {
                plant.filter(plant => {
                    if (query === "") {
                        return plant;
                    } else if (plant.name.toLowerCase().includes(query.toLowerCase())) {
                        return plant;
                    }
                })
                .map((plant, index) => {
                    return <div key={index}>
                        <Link to={`/plant/${plant._id}`}>{plant.name}</Link>
                    </div>
                })
            }
        </>
    )
}
export default Dashboard;