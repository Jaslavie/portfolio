import logo from '../images/VoicewiseLogo.svg'

function Nav() {
    return(
    <div className='full-nav-contain'>
        <div className="banner-contain">
            On-the-go learning. Listen to the <a href="">Self Mastery Podcast</a>
        </div>
        <div className="nav-contain">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <ul>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/about">About</a></li>
                    
                </ul>
            </div>
    </div>
        
        
    )
}
export default Nav