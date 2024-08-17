import './ErrorElement.css'
import {Link} from "react-router-dom";

export default function ErrorElement() {
    return(
        <div className="errorBody">
            <h1>404 | Page Not Found</h1>
            <Link to={'/'}>
                <button>Go Home</button>
            </Link>
        </div>
    )
}