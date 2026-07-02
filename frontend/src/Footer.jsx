import "./styles/footer.css"
import youtubeIcon from "./assets/youtube-line.png"
import twitterIcon from "./assets/twitter-x-line.png"
import facebookIcon from "./assets/facebook-line.png"
import instagramIcon from "./assets/instagram-line.png"


const Footer = () =>{
    return(
        <>
            <div className="footers">
                <div className="footer-main">
                    <div className="p-text">
                        <p>Track website traffic in real time.</p>
                        <p>Monitor user behavior with precision.</p>
                        <p>Detect unusual activity instantly.</p>
                        <p>Smart, secure, and insightful analytics.</p>
                    </div>
                    <div className="content1">
                        <p className="main1">SERVICES</p>
                        <p className="lines">Web analytics</p>
                        <p className="lines">DDOS mapper</p>
                        <p className="lines">URL Shortner</p>
                    </div>
                    <div className="socials">
                        <div>
                            <h2>Socials</h2>
                        </div>
                        <div>
                            <img src={youtubeIcon} className="social-icons"></img>
                            <img src={twitterIcon} className="social-icons"></img>
                            <img src={facebookIcon} className="social-icons"></img>
                            <img src={instagramIcon} className="social-icons"></img>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <p>Made with ❤️ by Harshit</p>
                </div>
            </div>
            
        </>
    )
}

export default Footer;