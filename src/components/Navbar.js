import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import './Navbar.css'

export default function Navbar() {
    const { color } = useContext(ThemeContext)
    // ContextProvider 가 아닌, useContext를 사용하는 것에 주의.

    return (
        <div className='navbar' style={{ background: color }}>
            <nav>
                <Link to='/' className='brand'>
                    <h1 >Cooking Genie</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>New Recipe</Link>
            </nav>
        </div>
    )
}
