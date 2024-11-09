import './header.css'
import {Link, useLocation} from "react-router-dom";

export default function Header() {
    const location = useLocation();
    return (
        <>
            <header className={'header'}>
                <img alt={''} src={'/tinkerLogo.png'} className={'logo'}></img>
                Technical101 - 2024
                <Link to={'/contribute'} className={'pullRequest'} onClick={() => {}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="icon-tabler icons-tabler-outline icon-tabler-message">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 9h8"/>
                        <path d="M8 13h6"/>
                        <path
                            d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                        <title>Add Contributions</title>
                    </svg>
                </Link>
            </header>
            <h4 className={"path"}>{location.pathname.split("/").filter(Boolean).join(" > ")}</h4>

        </>
    )
}