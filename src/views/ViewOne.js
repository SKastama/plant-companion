import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link, useParams
} from "react-router-dom";

const ViewOne = (props) => {
    const [onePlant, setOnePlant] = useState(null);
    const [plant, setPlant] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/plant/' + id)
            .then(res => setOnePlant(res.data))
            .catch(err => console.error(err));
        
        axios.get('http://localhost:8000/api/plant')
            .then(res=>{
                setPlant(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [id]);
    
    if (loaded === false) {
        return "Page is Loading...";
    }

    return (
        <>
            <div>
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
            </div>
            <div>
                <h1>{onePlant.name}</h1>
                <p>{onePlant.sciName}</p>
                <p>{onePlant.companion.map((comp, index) => {
                        return <div key={index}>
                            <p>{comp}</p>
                        </div>})}
                </p>
                <p>{onePlant.enemy.map((enemy, index) => {
                        return <div key={index}>
                            <p>{enemy}</p>
                        </div>})}
                </p>
                <p>{onePlant.comments}</p>

            </div>
        </>
    )
}
export default ViewOne;