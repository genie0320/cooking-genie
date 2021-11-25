import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'
import './Search.css'

export default function Search() {

    const queryWord = useLocation().search
    const queryKey = new URLSearchParams(queryWord)
    // js의 기본함수. 사용하려면 먼저 new 해줘야 한다.
    const keyword = queryKey.get('q')
    // 여기서 인수는 아무거나 된다... 고 한다. 

    const url = 'http://localhost:3000/recipes?q=' + keyword
    const { error, isPending, data } = useFetch(url)

    return (
        <div>
            <h2 className="page-title">Recipes including "{keyword}</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="isPending">Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
