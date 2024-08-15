import './App.css'
import './resize.css'
import {Element} from "./element.jsx";

function App() {

  return (
    <div style={{position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%", width: "100%"}} >
        <header className={'header'}>
            <img alt={''} src={'tinkerLogo.png'} className={'logo'}></img>
            Tinker - 101
        </header>
        <div className={'container'}>
            <Element heading={"GIT HUB- Febin"} link={"https://github.com/fbn776"} description={"Add Description"}></Element>
            <Element heading={"Projects- Febin"} link={"https://fbn776.github.io/"}></Element>
            <Element heading={"GIT HUB- Abhiram"} link={"https://github.com/abhi5455"}></Element>
            <Element heading={"Projects- Abhiram"} link={"https://abhi5455.github.io/Projects/"}></Element>
            <Element heading={"Ensemble Website"} link={"https://ensemblecse24.vercel.app/"}></Element>
            <Element heading={"TedX Website"} link={"https://www.tedxgecrit.com/"}></Element>
            <Element heading={"KTU BOT"} link={"https://t.me/ktu_results_bot/"}></Element>
            <Element heading={"Study Material"} link={"https://kgk.gitbook.io/resources"}></Element>
        </div>
    </div>
  )
}

export default App
