import {useLocation} from "react-router-dom";
import Header from "./header/Header.jsx";

export default function ContainerElements({Elements}) {
    const location = useLocation();
    return (
        <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            width: "100%"
        }}>
            <Header></Header>
            <h4 className={"path"}>{location.pathname.split("/").filter(Boolean).join(" > ")}</h4>
            <div className={'container'}>
                {Elements}
            </div>
        </div>
    )
}