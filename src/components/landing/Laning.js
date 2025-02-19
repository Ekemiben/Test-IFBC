import React from 'react'
import "./landing.css"
import ImgOne from "../images/k.png"
import { Link } from 'react-router-dom'
import Insidelanding from './insidelanding/Insidelanding'

const Laning = () => {
  return (
    <>
        
          



    <div className='container'>
      <div className='top-cover'>
        <div className='content'>
          <div className='text-content'>
            <h1>Kickstart Your Tech Career Today</h1>
            <p>Let's help you achieve your goal of becoming a software engineer; Land your first job within six months</p>
            <div className='btn'>
              <Link to='/application'>
                <button>Apply</button>
              </Link>
              <button className='btn-web'>Get a Website</button>
            </div>
          </div>
          <div className='top-img'>
            <img src={ImgOne} alt='Top image' />
          </div>
        </div>
      </div>
    </div>
  




     <Insidelanding />     






          
    </>
  )
}

export default Laning
