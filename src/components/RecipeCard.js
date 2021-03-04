import React from 'react'
// import recipes from '../recipes'

const RecipeCard = (props) => {

    const {recipes,index} = props



    //In the h2 tag, print 'Recipe # ' + the value of the id property from the recipe object at recipes[index].

    //In the h1 tag, print the value of the title property from the recipe object at recipes[index].

    //Escape JSX in the ul tag, and map over the ingredients property at recipes[index]. Then render an li tag for each value of the ingredients array.

    //In the h3 tag, print 'Prep Time: ' + the value of the prepTime property from the recipe object at recipes[index].

        return (
            <div className="card">
                <div className="card-number">
                    <h2>Recipe # {recipes[index].id}</h2>
                </div>
                <h1></h1>
                <ul></ul>
                <h3></h3>
            </div>
        )
    
}

export default RecipeCard