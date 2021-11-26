import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useTheme } from '../hooks/useTheme'

import './Navbar.css'

export default function Navbar() {
    const { color, colorChange } = useTheme()

    const handleNavClick = () => {
        console.log('clicked!')
        colorChange('pink')
    }

    return (
        <div className='navbar' style={{ background: color }}>
            <nav onClick={handleNavClick}>
                <Link to='/' className='brand'>
                    <h1 >Cooking Genie</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>New Recipe</Link>
            </nav>
        </div>
    )
}
