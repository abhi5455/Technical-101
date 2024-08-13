export function Element({heading ,link}){
    return(
        <a href={link}>
            <div className="childDiv">
                <h3>{heading}</h3>
            </div>
        </a>
    )
}