import BlueGradient from '../images/blue gradient.svg'
import PurpleGradient from '../images/purple gradient.svg'
import Mock from '../images/voicewise center mock.svg'
import Textra from "react-textra";
import Arrow from '../images/arrowRightBlack.png'
import Fade from "react-reveal/Fade";
import School from '../images/gradGap.png'
import Career from '../images/careerIcon.png'
import Walks from '../images/walkIcon.png'
import Life from '../images/keyIcon.png'
import Course from '../images/voicewiseCoursePageMock.svg'
import Resources from '../images/voicewiseResourcesMock.svg'
import Comments from '../images/voicewiseCommentsMock.svg'
import Podcast from '../images/voicewisePodcastMock.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import FAQ from '../components/FAQ'
import Marquee from "react-fast-marquee";


function Home() {
    return(
        <div className="container">
            <div className="header-contain">
                <Fade bottom delay={200}>
                    <div className="subheading-header-contain">
                    <p><span>NEW</span>&nbsp; Introducing the new resources channel</p>
                    <img src={Arrow}/>
                </div>
                </Fade>
                <Fade bottom delay = {500}>
                     <h1>The <span><Textra
                    effect="downTop"
                    data={["✦ self-improvement hub", "▲ learning outlet", "❤︎ community"]}
                /></span> you never knew you needed</h1>
                </Fade>
               <Fade bottom delay = {800}>
    <p className="paragraphL">The central place for Gen Z students to congregate and grow</p>  
               </Fade>
               <Fade bottom delay = {1100}>
                    <div className="button-contain" style={{marginTop: '22px'}}>
                        <button className="main-button" ><a href="">Get started</a></button>
                        <button className='sec-button'><a href="">Join the tribe</a></button>
                    </div>
               </Fade>
               
               <img src={Mock} alt='Voicewise self improvement hub for high school students dashboard courses page'/>
               
               <img src={BlueGradient} style={{position: 'absolute',
    marginRight: '-66vw',
    marginTop: '-56vh',
    top: '0',
    right: '0', zIndex: '1'}}/>
               <img src={PurpleGradient} style={{position: 'absolute',
    marginRight: '64vw',
    marginTop: '28vh',
    top: '0',
    right: '0', zIndex: '1'}}/>
            </div>
            
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
            
            {/* overview */}
            <section>
               <div className="head-text-contain">
                <h1>The all-in-one <br /><span>self-growth toolbox</span></h1>
                <p>School teaches you facts and figures. But It doesn’t give 
                    you the mindset-building resources to succeed. We’re here 
                    to fill that gap.</p>
                </div> 
                <div className="growth-items-contain">
                    <div className="growth-item">
                        <a href="">
                            <div className="icon-contain">
                            <img src={School}/>
                           
                        </div>
                         <h3>For School</h3>
                            <p>extracurricular and academic advice</p> 
                        </a>
                       
                    </div>
                    <div className="growth-item">
                        <a href="">
                            <div className="icon-contain">
                            <img src={Career}/>
                           
                        </div>
                         <h3>For Career</h3>
                            <p>get internships, research, projects, and more</p>
                        </a>
                        
                    </div>
                    <div className="growth-item">
                        <a href="">
                            <div className="icon-contain">
                            <img src={Walks}/>
                           
                        </div>
                         <h3>For Walks</h3>
                            <p>podcasts and audiobooks to listen on-the-go</p>
                        </a>
                        
                    </div>
                    <div className="growth-item">
                        <a href="">
                           <div className="icon-contain">
                            <img src={Life}/>
                           
                        </div>
                         <h3>For Life</h3>
                            <p>access templates to visualize your future</p> 
                        </a>
                        
                    </div>
                </div>
                
            </section>

            {/* features */}
            <section>
                <div className="head-text-contain">
                    <h1>Let's talk <span>business</span></h1>
                    <p>Really, our courses cover everything from 
                       productivity to self growth and entrepreneurship</p>
                </div>
                <div className="two-column-contain">
                    <div className="column-text-contain">
                        <h1>🍦</h1>
                        <div className="right-contain">
                            <h2>Bite-sized, digestible courses</h2>
                            <p>No more long-winded lectures. Just straight-to-the-point text broken up by content, resources, and challenge.</p>
                        </div>
                    </div>
                    <img src={Course} alt='Self improvement curriculum page tailored for high school students'/>
                </div>
                <div className="two-column-contain">
                    <img src={Resources} alt='Resources page with everything self growth, academics, extracurricular activities, and more'/>
                    <div className="column-text-contain">
                        <h1>💻</h1>
                        <div className="right-contain">
                            <h2>Any topic, any type.</h2>
                            <p>A variety of resources for every kind of learner, divided based on the type, length, and topic.</p>
                        </div>
                    </div>
                </div>
                <div className="two-column-contain">
                    
                    <div className="column-text-contain">
                        <h1>🌱</h1>
                        <div className="right-contain">
                            <h2>Share your progress and grow, together</h2>
                            <p>Join our budding community of Gen Z innovators and collaborate with others through our school chapters.</p>
                        </div>
                    </div>
                    <img src={Comments}/>
                </div>
                <img src={PurpleGradient} style={{position: 'absolute',
    marginRight: '-60vw',
    marginTop: '308vh',
    top: '0',
    right: '0', zIndex: '1'}}/>
                <img src={BlueGradient} style={{position: 'absolute',
    marginRight: '64vw',
    marginTop: '408vh',
    top: '0',
    right: '0', zIndex: '1'}}/>
                <img src={PurpleGradient} style={{position: 'absolute',
    marginRight: '-47vw',
    marginTop: '608vh',
    top: '0',
    right: '0', zIndex: '1'}}/>
                <img src={BlueGradient} style={{position: 'absolute',
    marginRight: '56vw',
    marginTop: '685vh',
    top: '0',
    right: '0', zIndex: '1'}}/>
            
            </section>
            
            {/* podcasts feature */}
            <section>
                <div className="callout-contain">
                    <div className="two-column-contain">
                        <div className="right-contain">
                            <h2>The self growth tribe, moved to audio</h2>
                            <p>Listen for academic advice, mentorship seshes, or just some extra motivation for the day - all on the go.</p>
                            <button className='main-button'>
                                <a href="">
                                    <FontAwesomeIcon icon={faBolt} />
                                    Listen Now
                                </a>
                            </button>
                        </div>
                        <img src={Podcast} alt="Voicewise self improvement podcast for teens" />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section>
                <FAQ />
            </section>
            {/* cta */}
            <section >
                <div className="head-text-contain">
                    <h1>Join the <span>Revolution</span></h1>
                    <p>Find your purpose. Craft your vision. Achieve Insane Success.</p>
                    <button className='main-button'>
                        <a href="">
                        Join the tribe 
                        </a>
                    </button>
                </div>
                
            </section>
           
        </div>

       
    )
}

export default Home