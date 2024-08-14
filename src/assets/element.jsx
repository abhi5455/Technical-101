export function Element({heading ,link, description}) {
    return(
        <a href={link} className="childDiv">
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width:'100%'}}>
                <div style={{width:'80%'}}>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                </div>
                <img alt={"open"} src={"img.png"} style={{height: "25px", width: "25px"}}></img>
            </div>
        </a>
    )
}