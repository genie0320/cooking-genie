import { useFetch } from '../../hooks/useFetch'

import './Home.css'

export default function Home() {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')

    return (
        <div>
            {error && <p className='error'>There was an error! {error}</p>}
            {isPending && <p className='pending'>Please Waite.</p>}
            {recipes && recipes.map(recipe => (
                <h2 key='recipe.id'>{recipe.title}</h2>
            ))}
        </div>
    )
}
