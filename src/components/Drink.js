import React from 'react'
import axios from 'axios'

const Drink = () => {

    
    const apiurl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    const axios = require('axios');

    async function getRandomDrink () {

        let result = await axios.get(apiurl)

        let data = result.data
        
        displayRandomCocktail(data)

        
    }

    function displayRandomCocktail(cocktail) {
        console.log(cocktail.drinks[0].strDrink)

        let randomDrink = cocktail.drinks[0].strDrink

        return <h1>{randomDrink}</h1>
        
    }
    return (
        <div>
            <button onClick={getRandomDrink}>Random Drink</button>
        </div>
    )
}

export default Drink
