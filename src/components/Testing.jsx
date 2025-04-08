import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function TestingComponent() {
    const [count, setCount] = useState(1)
    useEffect(() => console.log('First use effect!'), [])

    useEffect(() => {
        console.log(`The current count is ${count}`)
    })

    function IncreaseCount() {
        setCount(current => current + 1)
    }

    function DecreaseCount() {
        setCount(current => current - 1)
    }

    return (
        <>
            <h1> The current count is {count}</h1><br/>
            <button onClick={IncreaseCount}>Increase</button>
            <br/>
            <button onClick={DecreaseCount}>Decrease</button>
        </>
    );
}

export default TestingComponent;
