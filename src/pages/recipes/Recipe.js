import { useParams } from 'react-router'
import { useFetch } from '../../hooks/useFetch'

import './Recipe.css'

export default function Recipe({ recipes }) {
    const { id } = useParams()
    const url = 'http://localhost:3000/recipes/' + id
    const { data: recipe, isPending, error } = useFetch(url)

    return (
        < div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='Loading'>Loading...</p>}
            {recipe &&
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>{recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ingItem => (
                            <li key={ingItem}>{ingItem}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>}

        </ div >
    )
}
