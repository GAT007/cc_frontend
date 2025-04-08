import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState }  from "react";

function Fruit(props) {
    const [numberOfApples, setNumberOfApples] = useState(10)
    function AppleDisplay(n) {
      return `John has some ${n} apples!`
    }

    function IncreaseApple() {
        setNumberOfApples((currentValue) => currentValue+1)
    }

    function DecreaseApple() {
        setNumberOfApples((currentValue) => currentValue-1)
    }

    function TooManyApples() {
        if (numberOfApples > 10) {
           return <h1>John has too many apples!</h1>
        }
        else {
            return ''
        }
    }

    return (
        <>
        <h1 className="text-secondary">{AppleDisplay(numberOfApples)}</h1>
        <h1 className="display-4">This is a {props.color} {props.name}!</h1>
            <button onClick={IncreaseApple} className="btn btn-success">Increase</button>
            <button onClick={DecreaseApple} className="btn btn-danger">Decrease</button>
            {TooManyApples()}
        </>
    );


}

export default Fruit