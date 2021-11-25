import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useFetch } from '../../hooks/useFetch'
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [cookingTime, setCookingTime] = useState('')
    const [newIng, setNewIng] = useState('')
    const ingInput = useRef(null)
    // ref가 걸려 있는 해당 엘리먼트를 가지게 된다. 
    const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')
    // 나는 postData()를 실행할건데, data는 이거야. 그리고 error 나면 알려줘.
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(title, cookingTime, ingredients, method)
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minites' })
        // id는 json-server에서 자동으로 부여하니 전달할 필요 없다!
    }

    const handleClick = (e) => {
        e.preventDefault()

        const ing = newIng.trim()
        // 가져온 값에서 공백 없애기
        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIng => [...prevIng, newIng])
            setNewIng('')
            // 입력 후 해당 입력란 비워주기
            ingInput.current.focus()
            // 입력 후 해당 입력란으로 다시 포커싱해주기. useRef()로 사용할 수 있다.
        }
    }

    useEffect(() => {
        if (data) {
            history.push('/')
        }
    }, [data])

    return (
        <div className='addRecipe'>
            <h2>Add new recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title</span>
                    <input type='text' onChange={(e) => { setTitle(e.target.value) }} value={title} required />
                </label>
                <label>
                    <span>Cooking time</span>
                    <input type="number" onChange={(e) => { setCookingTime(e.target.value) }} value={cookingTime} required />
                </label>

                <label>
                    <span>Ingredients</span>
                    <div className="ing">
                        <input type="text" onChange={(e) => setNewIng(e.target.value)} value={newIng} ref={ingInput} />
                        <button onClick={handleClick}>add</button>
                    </div>
                </label>
                <p>Ingredients :  {ingredients.map((ing) => <em key={ing}>{ing}, </em>)}</p>

                <label>
                    <span>Method</span>
                    <textarea onChange={(e) => { setMethod(e.target.value) }} value={method} required ></textarea>
                </label>
                <button className='submit'>submit</button>
            </form>
        </div>
    )
}
