import './IntroCard.css'
import githubIconUrl from "../../assets/github.png"
import linkedinIconUrl from "../../assets/linkedin.png"

export const IntroCard = () => {
    return <div className = "intro-card-container">
        <div className = "intro-card-photos">
            <div className = "me">
                <img className = "me-photo" src = "https://media.licdn.com/dms/image/v2/C5603AQHiha5m9vk3DQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631032171067?e=1749081600&v=beta&t=iPPoU7Ev5-rDYFsiIxowqrDbkc8MhxHB_sj7OuS9QqE"/>
            </div>
            <div className = "icon-row">
                <a href={"https://www.linkedin.com/in/eamarohe/"} className='icon-link'> <img className="social-icon" src = {linkedinIconUrl}/> </a>
                <a href={"https://github.com/amaroguy"} className='icon-link'> <img className="social-icon" src = {githubIconUrl}/> </a>
            </div>
        </div>
        <div className = "intro-card-text">
            <p> Software Engineer based in Seattle. Background is a random instance of John Conway's game of life. </p>
        </div>
    </div>
}