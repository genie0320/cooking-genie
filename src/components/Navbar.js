import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
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
