import React from 'react'
import Cocktail from './Cocktail'
const Drink = (props) => {
    if (props.shaking) {
        return <Cocktail />
    }
    return (
        <div>
            {props.data}
        </div>
    )
}

export default Drink
