import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

  let navigate = useNavigate()

  return (
    <nav>
        <div class="row nav__wrapper">
            <div class="nav__title clickable" onClick={() => navigate("/")}>Job Lurker</div>
            <div class="search_bar">
                <input type="text" class="search_bar--input" placeholder="Search" onkeyup="searchString(event)"/>
                <FontAwesomeIcon icon={faSearch} className='fa-magnifying-glass'/>
            </div>
            <div class="nav__links">
                <a class="nav__link outline outline--white clickable" onClick={() => navigate("/")}>Home</a>
                <a class="nav__link outline outline--white clickable" onClick={() => navigate("/browse")}>Browse</a>
                <a class="nav__link outline outline--white clickable">About</a>
            </div>
        </div>
    </nav>
  )
}
