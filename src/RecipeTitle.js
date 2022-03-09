import React from 'react'
import "./RecipeTitle.css"

const RecipeTitle = ({ recipe }) => {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            < div className="recipeTitle" onClick={() => {
                window.open(recipe["recipe"]["url"])
            }}>
                <img className="recipeTitle__img" src={recipe["recipe"]["image"]} />
                <p className="recipeTitle__name">{recipe["recipe"]["label"]}</p>
            </div >
        )
    )
}

export default RecipeTitle