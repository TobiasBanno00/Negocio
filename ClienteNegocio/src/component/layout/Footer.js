import "../../style/footer.css"
import React from 'react'
import logo from "../../assets/img/logo1.png"

function Footer() {
  return (
   
    <footer className="footer">
        <div className="info">
                <img className='logo' src={logo} alt='logo' />
                <p>Expertos en lo que hacemos</p>
        </div>
                
        <div className="social-media">
                <a href="./" className="social-media-icon">
                        <i className='bx bxl-facebook'></i>
                </a>
                <a href="./" className="social-media-icon">
                        <i className='bx bxl-twitter' ></i>
                </a>
                <a href="./" className="social-media-icon">
                        <i class='bx bxl-instagram' ></i>
                </a>
        </div>
            
        
               
    </footer>
   
  )
}

export default Footer