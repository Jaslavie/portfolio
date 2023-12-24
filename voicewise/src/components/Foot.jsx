import logo from '../images/VoicewiseLogo.svg'
import Instagram from '../images/instagramIcon.svg'
import Youtube from '../images/youtubeIcon.svg'
import Discord from '../images/discordIcon.svg'
import Marquee from "react-fast-marquee";
import Icon from '../images/voicewiseLogoFav.svg'

function Foot() {
    return(
        <>
        
            <div className="footer-contain">
            <Marquee>
                <div className="marquee">
                    <span>free courses</span>
                    <span>✦</span>
                    <span>curated resources for anyone, anywhere</span>
                    <span>▲</span>
                    <span>design your reality</span>
                    <span>♥︎</span>
                    <span>discover your calling</span>
                    <span>✦</span>
                </div>
                
               </Marquee>
                <div className="footer-wrapper">
                    <div className="left-footer">
                        {/* <div className="logo-contain">
                            <img src={Icon} style={{maxWidth:'100px'}}/> 
                            <h2>Voicewise empowers you to learn on your own terms</h2>
                        </div> */}
                        <div className="logo-contain">
                            <img src={logo} style={{marginLeft: '-2vw'}}/>
                            <p>empowering you to learn on your own terms</p>
                        </div>
                        
                        <div className="socials-contain">
                            <a className="social-item" href='/'>
                                <img src={Instagram} alt="" />
                            </a>
                            <a className="social-item" href=''>
                                <img src={Youtube} alt="" />
                            </a>
                            <a className="social-item" href=''>
                                <img src={Discord} alt="" />
                            </a>
                        </div>

                    </div>
                    <div className="right-footer">
                        <ul>
                            <p><b>About</b></p>
                            <li><a href="">Home</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Podcast</a></li>
                            <li><a href="">Resources</a></li>
                        </ul>
                        <ul>
                            <p><b>Help</b></p>
                            <li><a href="">Feedback</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-end">
                    <p>© Voicewise 2023. All Rights Reserved.</p>
                    <p>Built with ♥︎ and lots of ☕️</p>
                </div>
            </div>
        </>
    )
}

export default Foot