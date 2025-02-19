import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import ProfStyle from "./professionals.module.css"

import ImgOne from '../images/k.png'
// import ImgTwo from '../../Images/211.jpg'




function Professionals() {
 

  return (
    <div>
        <sectioncard className={ProfStyle.cardMain}>
         <div className={ProfStyle.container}>
                <div className={ProfStyle.cardCon}>
                    



                    <div className={ProfStyle.eachCard}>
                       
                        <div className={ProfStyle.imgContent}>
                          <div className={ProfStyle.cardImg}>
                            <img src={ImgOne} 
                            alt="Person" />
                          </div>
                        </div>
                        <span className={ProfStyle.overlay}></span>

                        <div className={ProfStyle.cardContent}>
                          <blockquote>Sophie Shittu</blockquote>
                          <blockquote>DaveOps Engineer <span>(DevCareer, Abuja)</span> </blockquote>
                          <cite></cite>
                          <blockquote>Sophie Shittu is a DevOps engineer with years of experience...</blockquote>
                          {/* <br><br></br></br> */}

                          <div className={ProfStyle.colzicon}>
                            <h4>Follow Us On</h4>
                        
                        
                          <a href=''>
                              <i className='fa fa-facebook-square'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-linkedin'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-twitter'></i>
                          </a>
                          
                        
                        </div >

                        
                          <Link to='' className={ProfStyle.btnCon}>
                          <button className={ProfStyle.btn}>Read more</button>
                          </Link>
                        </div>
                        
                    </div>



                   



                    <div className={ProfStyle.eachCard}>
                       
                        <div className={ProfStyle.imgContent}>
                          <div className={ProfStyle.cardImg}>
                            <img src={ImgOne} 
                            alt="Person" />
                          </div>
                        </div>
                        <span className={ProfStyle.overlay}></span>

                        <div className={ProfStyle.cardContent}>
                          <blockquote>Adeyemi Amusan</blockquote>
                          <blockquote>Backend Software Engineer <span>(Tiidelab, Abuja)</span> </blockquote>
                          <cite></cite>
                          <blockquote>Adeyemi Amusan is a detailed oriented software engineer with years of experience...</blockquote>
                          {/* <br><br></br></br> */}

                          <div className={ProfStyle.colzicon}>
                            <h4>Follow Us On</h4>
                        
                        
                          <a href=''>
                              <i className='fa fa-facebook-square'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-linkedin'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-twitter'></i>
                          </a>
                        
                        </div>

                        
                          <Link to="" className={ProfStyle.btnCon}>
                          <button className={ProfStyle.btn}>Read more</button>
                          </Link>
                        </div>
                        
                    </div>




                    <div className={ProfStyle.eachCard}>
                       
                        <div className={ProfStyle.imgContent}>
                          <div className={ProfStyle.cardImg}>
                            <img src={ImgOne} 
                            alt="Person" />
                          </div>
                        </div>
                        <span className={ProfStyle.overlay}></span>

                        <div className={ProfStyle.cardContent}>
                          <blockquote>Suleiman Faruk</blockquote>
                          <blockquote>Backend & DevOps Engineer <span>(Techtink Solutions, Abuja)</span> </blockquote>
                          <cite></cite>
                          <blockquote>Suleiman Faruk is a year plis software engineer experience...</blockquote>
                          {/* <br><br></br></br> */}

                          <div className={ProfStyle.colzicon}>
                            <h4>Follow Us On</h4>
                        
                        
                          <a href=''>
                              <i className='fa fa-facebook-square'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-linkedin'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-twitter'></i>
                          </a>
                        
                        </div>

                        
                          <Link to="" className={ProfStyle.btnCon}>
                          <button className={ProfStyle.btn}>Read more</button>
                          </Link>
                        </div>
                        
                    </div>




                    <div className={ProfStyle.eachCard}>
                       
                        <div className={ProfStyle.imgContent}>
                          <div className={ProfStyle.cardImg}>
                            <img src={ImgOne} 
                            alt="Person" />
                          </div>
                        </div>
                        <span className={ProfStyle.overlay}></span>

                        <div className={ProfStyle.cardContent}>
                          <blockquote>Daniel Effiong</blockquote>
                          <blockquote>Frontend Software Engineer & Data Analyst <span>(DCI, Abuja)</span> </blockquote>
                          <cite></cite>
                          <blockquote>Daniel Effiong is a Frontend Software Engineer & Data Analyst...</blockquote>
                          {/* <br><br></br></br> */}

                          <div className={ProfStyle.colzicon}>
                            <h4>Follow Us On</h4>
                        
                        
                          <a href=''>
                              <i className='fa fa-facebook-square'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-linkedin'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-twitter'></i>
                          </a>
                        
                        </div>

                        
                          <Link to="" className={ProfStyle.btnCon}>
                          <button className={ProfStyle.btn}>Read more</button>
                          </Link>
                        </div>
                        
                    </div>





                    <div className={ProfStyle.eachCard}>
                       
                        <div className={ProfStyle.imgContent}>
                          <div className={ProfStyle.cardImg}>
                            <img src={ImgOne} 
                            alt="Person" />
                          </div>
                        </div>
                        <span className={ProfStyle.overlay}></span>

                        <div className={ProfStyle.cardContent}>
                          <blockquote>Godwin Fred Eyak</blockquote>
                          <blockquote>Application Developer & Internet of Things Engineer <span>(Freelancer, Uyo)</span> </blockquote>
                          <cite></cite>
                          <blockquote>Godwin Fred Eyak is an Application Developer & Internet of Things Engineer with years of experience...</blockquote>
                          {/* <br><br></br></br> */}

                          <div className={ProfStyle.colzicon}>
                            <h4>Follow Us On</h4>
                        
                        
                          <a href=''>
                              <i className='fa fa-facebook-square'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-linkedin'></i>
                          </a>
                          <a href=''>
                              <i className='fa fa-twitter'></i>
                          </a>
                        
                        </div>

                        
                          <Link to="" className={ProfStyle.btnCon}>
                          <button className={ProfStyle.btn}>Read more</button>
                          </Link>
                        </div>
                        
                    </div>




                    <div className={ProfStyle.eachCard}>
                       
                       <div className={ProfStyle.imgContent}>
                         <div className={ProfStyle.cardImg}>
                           <img src={ImgOne} 
                           alt="Person" />
                         </div>
                       </div>
                       <span className={ProfStyle.overlay}></span>

                       <div className={ProfStyle.cardContent}>
                         <blockquote>Ekemini Sunday Ben</blockquote>
                         <blockquote>Full-Stack Software Engineer <span>(DevCareer, Abuja)</span> </blockquote>
                         <cite></cite>
                         <blockquote>Ekemini Sunday Ben is a full-stack software engineer with years of experience...</blockquote>
                        
                         {/* <br><br></br></br> */}

                         <div className={ProfStyle.colzicon}>
                           <h4>Follow Us On</h4>
                       
                       
                         <a href='https://web.facebook.com/?_rdc=1&_rdr'>
                             <i className='fa fa-facebook-square'></i>
                         </a>
                         <a href='https://www.linkedin.com/in/ekemini-ben/'>
                             <i className='fa fa-linkedin'></i>
                         </a>
                         <a href='https://twitter.com/EkeminiBen3'>
                             <i className='fa fa-twitter'></i>
                         </a>
                       
                       </div>
                          <Link to="" className={ProfStyle.btnCon}>
                            <button className={ProfStyle.btn}>Read more</button>
                          </Link>
                         
                       </div>
                       
                   </div>





{/* 
                    <div className={ProfStyle.eachCard}>
                       
                        <div className={ProfStyle.imgContent}>
                          <div className={ProfStyle.cardImg}>
                            <img src={ImgOne} 
                            alt="Person" />
                          </div>
                        </div>
                        <span className={ProfStyle.overlay}></span>

                        <div className={ProfStyle.cardContent}>
                          <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                          <cite>- ekitech</cite>
                          <button className={ProfStyle.btn}>Read more</button>
                        </div>
                        
                    </div> */}
                   
                   
                    
                   
                </div>
                <div className={ProfStyle.btnsection}>
                        {/* <Link to ="/hiredev">
                        <button> Hire a professional</button>
                        </Link> */}
                  </div>
                </div>
                
        </sectioncard>
    </div>
  );
}


export default Professionals;