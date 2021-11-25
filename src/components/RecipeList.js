import { Link } from "react-router-dom"

import './RecipeList.css'

export default function RecipeList({ recipes }) {

    if (recipes.length === 0) {
        return <div className="nodata">There is no such thing</div>
    }

    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipe/${recipe.id}`}> Cook this </Link>
                </div>

            ))}

        </div>
    )
}
