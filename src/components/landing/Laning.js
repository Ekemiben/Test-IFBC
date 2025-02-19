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
                          <div><p>Let's help you achieve your goal of becoming a software engineer; Land your first job within six months</p></div>
                          <div className='btn'>
                              <button ><Link to='/application' style={{color:"#fff", fontSize:"27", textDecoration:"none"}}> Apply</Link>
                                  
                              </button>
                              <button style={{backgroundColor: "#60D9C5", border:"2px solid #173B3F", marginLeft:"20px"}}>Get a Website</button>
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
