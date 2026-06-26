import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

  let navigate = useNavigate()

  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="footer__title">Job Lurker</div>
                <div className="footer__links">
                    <a className="footer__link outline outline--primary clickable" onClick={() => navigate("/")}>Home</a>
                    <a className="footer__link outline outline--primary clickable" onClick={() => navigate("/browse")}>Browse</a>
                    <a className="footer__link outline outline--primary not-clickable" href='#'>About</a>
                </div>
                <div className="footer__copy">Copyright &copy; 2026 Job Lurker</div>
            </div>
        </div>
    </footer>
  )
}
