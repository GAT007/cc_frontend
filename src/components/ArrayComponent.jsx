import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';


const theFruits = [
        {id: 1, name: "Apple", color:"Red"},
        {id: 2, name: "Strawberry", color:"Red"},
        {id: 3, name: "Mangoes", color:"Yellow"},
        {id: 4, name: "Banana", color:"Yellow"},
        {id: 5, name: "Orange", color:"Orange"},
    ];
function ArrayLooper(props) {
    return (
        <>
        {theFruits.map((fruit)=> {

            console.log(fruit, typeof fruit)
            return <h5 key={fruit.id}>This is a {fruit.color} {fruit.name}</h5>
            })}
            </>
    );
}

export default ArrayLooper