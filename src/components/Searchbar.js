import { useState } from 'react'
import { useHistory } from 'react-router-dom'
// 디폴트는 react-router 였는데 -dom을 붙였다. 뭐가 다른거지?
// 새로운 react-router-dom 버전에서는 useNavigate() 로 바뀌었다. 

import './Searchbar.css'

export default function Searchbar() {
    const [keyword, setKeyword] = useState('')
    const history = useHistory()

    const handleInput = (e) => {
        e.preventDefault()

        setKeyword(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        // ' ' 가 아니다. ` ` 다!
        history.push(`/search?q=${keyword}`)

    }
    return (
        <div>
            <div className="searchbar">
                <form onSubmit={handleSearch}>
                    <label htmlFor="search">Search : </label>
                    <input
                        type="text"
                        id='search'
                        onChange={handleInput}
                    />
                </form>
            </div>
        </div>
    )
}
