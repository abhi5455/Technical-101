import {useLocation} from "react-router-dom";
import Header from "./header/Header.jsx";

export default function ContainerElements({Elements}) {
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
            <div className={'container'}>
                {Elements}
            </div>
        </div>
    )
}