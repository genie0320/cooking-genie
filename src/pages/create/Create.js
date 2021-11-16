import { useState } from 'react'
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, method, cookingTime)

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
                    <span>Method</span>
                    <textarea onChange={(e) => { setMethod(e.target.value) }} value={method} required ></textarea>
                </label>
                <button className='submit'>submit</button>
            </form>
        </div>
    )
}
