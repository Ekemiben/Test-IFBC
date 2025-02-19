import {Link} from 'react-router-dom'
import WebsiteStyle from './WebsitePrice.module.css'
// import Animatleft from 'react-reveal/Flip'
import Animatleft from 'react-reveal/Fade'
import Fade from 'react-reveal/Zoom'

import React from 'react'

import PremiumImg from '../images/k.png'
import Empathy from '../images/k.png'
import { BsFillCheckCircleFill } from "react-icons/bs";

const WebsitePrice = () => {
  return (
    <main>
        <section>
            <div className={WebsiteStyle.secondLayer}>
            <h1>Here are the offers for you</h1>
            </div>
           
            <div className={WebsiteStyle.priceContainer}>
                
                <div className={WebsiteStyle.empathy}>
                    
                    <Animatleft left cascade>
                        <h2>We empathize with you</h2>
                    </Animatleft>
                    <Animatleft right cascade>
                        <img src={Empathy} alt="Empathy pix" />
                    </Animatleft>
                    
                </div>
                

                <div className={WebsiteStyle.learningMain}>
                    {/* <Animatleft > */}
                    <Animatleft left cascade>
                        <div className={WebsiteStyle.flexcolumn}>
                            <div className={WebsiteStyle.cardprice}><h2>Basic</h2></div>
                            <div className= {WebsiteStyle.learning}>
                                <img src={PremiumImg} alt="Learning pix" />
                            </div>
                            <div className={WebsiteStyle.belowImg}>
                                {/* <hr></hr> */}
                                <div className={WebsiteStyle.cardcontent}>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>1 - 3 Pages Informative Website</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>Business Emails</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>Domain Name and Hosting</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>SSL Security</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>1 Month Technical Support</p></div>
                                <div className={WebsiteStyle.cardprice_price}> <p>Amount ₦230,000</p></div>

                                </div>
                            </div>
                        </div>
                        </Animatleft>
                        <Fade bottom cascade>
                        <div className={WebsiteStyle.flexcolumn}>
                            <div className={WebsiteStyle.cardprice}><h2>Pro</h2></div>
                            <div className= {WebsiteStyle.learning}>
                                
                                <img src={PremiumImg} alt="Learning pix" />
                                
                            </div>
                            <div className={WebsiteStyle.belowImg}>
                            {/* <hr></hr> */}
                            <div className={WebsiteStyle.cardcontent}>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>4 - 7 Pages Informative Website</p></div>
                                
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p> Business Emails</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>Domain Name and Hosting</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>SSL Security</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>Free Content Management Training/2 Month Technical Supporty</p></div>
                                <div className={WebsiteStyle.cardprice_price}> <p>Amount ₦560,000</p></div>

                            </div>                              
                            </div>
                        </div>
                        </Fade>

                        <Animatleft right cascade>
                        <div className={WebsiteStyle.flexcolumn}>
                        <div className={WebsiteStyle.cardprice}><h2>Premium</h2></div>
                            <div className= {WebsiteStyle.learning}>
                                
                                <img src={PremiumImg} alt="Learning pix" />
                                
                            </div>
                            <div className={WebsiteStyle.belowImg}>
                            {/* <hr></hr> */}
                            
                            <div className={WebsiteStyle.cardcontent}>
                            <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>10+ Pages Informative Website</p></div>
                                
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>Unlimited Business Emails</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>Domain Name and Hosting</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>SSL Security</p></div>
                                <div className={WebsiteStyle.cardinfo}><BsFillCheckCircleFill /> <p>Free Content Management Training/6 Month Technical Supporty</p></div>
                                <div className={WebsiteStyle.cardprice_price}> <p>Amount ₦1240,000</p></div>
                            </div>                               
                            </div>
                        </div>
                        </Animatleft>
                        <div className={WebsiteStyle.btnsection}>
                        <Link to ="/getwebsite">
                        <button> Continue</button>
                        </Link>
                        </div>
                    </div>
            </div>
        </section>
    </main>
  )
}

export default WebsitePrice