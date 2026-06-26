import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

  let navigate = useNavigate()
  const [searchTerm,setSearchTerm] = useState([""])

  return (
    <nav>
        <div className="row nav__wrapper">
            <div className="nav__title clickable" onClick={() => navigate("/")}>Job Lurker</div>
            <div className="search_bar">
                <input type="text" className="search_bar--input" placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)} onKeyPress={(event) => event.key === 'Enter' && navigate(`/browse/${searchTerm}`)}/>
                <FontAwesomeIcon icon={faSearch} className='fa-magnifying-glass clickable'  onClick={() => navigate(`/browse/${searchTerm}`)}/>
            </div>
            <div className="nav__links">
                <a className="nav__link outline outline--primary clickable" onClick={() => navigate("/")}>Home</a>
                <a className="nav__link outline outline--primary clickable" onClick={() => navigate(`/browse`)}>Browse</a>
                <a className="nav__link outline outline--primary not-clickable" href='#'>About</a>
            </div>
        </div>
    </nav>
  )
}
