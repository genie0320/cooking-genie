import { useState, useRef } from 'react'
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [newIng, setNewIng] = useState('')
    const ingInput = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, cookingTime, ingredients, method)
    }

    const handleClick = (e) => {
        e.preventDefault()

        const ing = newIng.trim()
        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIng => [...prevIng, newIng])
            setNewIng('')
            ingInput.current.focus()
        }
    }
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
                <span>Ingredients :  {ingredients.map((ing) => <em key={ing}>{ing}, </em>)}</span>

                <label>
                    <span>Method</span>
                    <textarea onChange={(e) => { setMethod(e.target.value) }} value={method} required ></textarea>
                </label>
                <button className='submit'>submit</button>
            </form>
        </div>
    )
}
