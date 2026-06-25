import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

  let navigate = useNavigate()

  return (
    <footer>
        <div class="container">
            <div class="row">
                <div class="footer__title">Job Lurker</div>
                <div class="footer__links">
                    <a class="footer__link outline outline--primary clickable" onClick={() => navigate("/")}>Home</a>
                    <a class="footer__link outline outline--primary clickable" onClick={() => navigate("/browse")}>Browse</a>
                    <a class="footer__link outline outline--primary clickable">About</a>
                </div>
                <div class="footer__copy">Copyright &copy; 2026 Job Lurker</div>
            </div>
        </div>
    </footer>
  )
}
