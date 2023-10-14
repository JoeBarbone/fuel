import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import home from "../images/home.png"
import add from "../images/add.png"
import report from "../images/report.png"


const showMessage = () => {
    alert("Hello MoFos!")
}

const Nav = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>   
                <img className='logo-img' src={logo} />
                {/* <h3>Keep accurate records of your spending</h3> */}
            </div>

            <div className=''>
                <ul>
                    <li><Link to='/'><img className='icon' src={home} /></Link></li>
                    <li><Link to='/add'><img className='icon' src={add} /></Link></li>
                    <li><Link to='/report'><img className='icon' src={report} /></Link></li>
                    {/* <li onClick={showMessage}>Show</li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav