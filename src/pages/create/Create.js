import { useState } from 'react'
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [ingItems, setIngItems] = useState('')
    const [newIng, setNewIng] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, method, cookingTime)

    }

    const handleClick = (item) => {

        console.log(item)
    }
    return (
        <div className='addRecipe'>
            <h2>Add new recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title</span>
                    <input type='text' onChange={(e) => { setTitle(e.target.value) }} value={title} requir ed />
                </label>
                <label>
                    <span>Ingredients</span>
                    <div className="ingredients">
                        <input type="text" />
                        <button className="btn" onClick={console.log('hi')}>add</button>
                    </div>
                </label>
                <label>
                    <span>Method</span>
                    <textarea onChange={(e) => { setMethod(e.target.value) }} value={method} requi red ></textarea>
                </label>
                <label>
                    <span>Cooking time</span>
                    <input type="number" onChange={(e) => { setCookingTime(e.target.value) }} value={cookingTime} requ ired />
                </label>
                <button className='submit'>submit</button>
            </form>
        </div>
    )
}
