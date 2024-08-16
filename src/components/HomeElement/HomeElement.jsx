import {Link} from "react-router-dom";
import './HomeElement.css'

export default function HomeElement({section,path}) {
    return(
    <Link to={path} className="childDiv1">
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', paddingLeft: '10px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="openIcon icon icon-tabler icons-tabler-outline icon-tabler-folder">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"/>
            </svg>
            <div style={{width: '80%'}}>
                <h3>{section}</h3>
            </div>
        </div>
    </Link>
    )
}