import { useFetch } from '../../hooks/useFetch'

import './Home.css'

export default function Home() {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')

    return (
        <div>
            Home.
            Today is so... tired.
        </div>
    )
}
