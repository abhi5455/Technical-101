import './header.css'
import {useLocation} from "react-router-dom";

export default function Header() {
    const location = useLocation();
    return (
        <>
            <header className={'header'}>
                <img alt={''} src={'/tinkerLogo.png'} className={'logo'}></img>
                Technical101 - 2024
            </header>
            <h4 className={"path"}>{location.pathname.split("/").filter(Boolean).join(" > ")}</h4>
        </>
    )
}