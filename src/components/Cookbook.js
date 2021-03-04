import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import Nav from './Nav'
import recipes from '../recipes'

class Cookbook extends Component {
    constructor(){
        super();
        this.state = {
            recipes: recipes,
            index: 0
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }
    increase() {
        if (this.state.index < this.state.recipes.length - 1){
        this.setState({ index: this.state.index + 1 })
        }
    }
    decrease() {
        if(this.state.index > 0) {
        this.setState({ index: this.state.index - 1 })
        } 
    }

    render(){
        // Pass recipes and index as props to RecipeCard.

        return (
            <div className="container">
                <RecipeCard myRecipes={this.state.recipes} myIndex={this.state.index}/>
                <Nav increase={this.increase} decrease={this.decrease}/>
            </div>
        )
    }

}

export default Cookbook