import NavElement from "./navElement.jsx"
import Card from "./Card.jsx"
import commingSoon from "./assets/time-line.png"
import urlImage from "./assets/urlimg.png"
import analyticsImg from "./assets/analytics.png"


const App = () => {

  return (
    <>
      <nav className="nav-bar">
              <NavElement name="Home"/>
              <NavElement name="Services"/>
              <NavElement name="Contact"/>
              <NavElement name="About"/>
      </nav>
      <h1 className="hero-content">Web<span className="special-content">analytics</span></h1>
      <h1 className="hero-content2"> and tools</h1>
      <h3 className="desc-text">Shorten. Share. Analyze.</h3>
      <div className="features-card">
        <Card url={urlImage} text={`Smart URLs for Smart Minds`} />
        <Card url={analyticsImg} text={`Know What Clicks.`}/>
        <Card url={commingSoon} text ={`New features. Comming soon...`}/>
      </div>
    </>
  )
}

export default App