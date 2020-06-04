import React from "react";
import "./App.css";
import axios from "axios";
import Drink from './components/Drink'
class App extends React.Component {
  state = {
    shaking: true,
    making: false
  };

  generateRandomDrink = async () => {
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    this.setState({
      drink: response.data.drinks[0].strDrink,
      ingredient: response.data.drinks[0].strIngredient1,
      ingredient2: response.data.drinks[0].strIngredient2,
      ingredient3: response.data.drinks[0].strIngredient3,
      measure: response.data.drinks[0].strMeasure1,
      measure2: response.data.drinks[0].strMeasure2,
      measure3:response.data.drinks[0].strMeasure3,
      instructions: response.data.drinks[0].strInstructions,
      image: response.data.drinks[0].strDrinkThumb,
      shaking: false,
      making: true
    });
    
  };


  generateRandomCocktail = () => {
    
    setTimeout(() => {
      this.generateRandomDrink()
    }, 2000)

    this.setState({
      shaking: true,
      making: false
    })
  }

  
  render() {

    return (
    
      <div className="container">
        <div className="title"> Make me a Cocktail! </div>
        <button onClick={this.generateRandomCocktail} className="button">Random Cocktail</button>
        <Drink shaking={this.state.shaking} />
        <p className="name">{this.state.drink} </p> <img src={this.state.image} /> <br />

        <p className="ingredients">{this.state.ingredient} </p>  <p className="measure">{this.state.measure}</p> <br />
        <p className="ingredients">{this.state.ingredient2} </p>  <p className="measure">{this.state.measure2}</p> <br />
        <p className="ingredients">{this.state.ingredient3} </p>  <p className="measure">{this.state.measure3}</p> <br />
        <p className="instructions">{this.state.instructions}</p>
      </div>
    );
  }
}

export default App;