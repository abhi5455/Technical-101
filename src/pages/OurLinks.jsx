import '../components/Element/Element.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


function OurLinks() {
    let [innerElementObj, setInnerElementObj] = useState([]);
    let [innerElements, setInnerElements] = useState([]);

    useEffect(() => {
        setInnerElementObj([
            {
                heading: "GitHub",
                link: "https://github.com/tinkerhub",
                description: "Official Github Account of Tinkerhub.rit"
            },
            {
                heading: "Instagram",
                link: "https://www.instagram.com/tinkerhub",
                description: "Official Instagram Account of Tinkerhub.rit"
            },
            {
                heading: "LinkedIn",
                link: "https://www.linkedin.com/company/tinkerhub-rit/",
                description: "Official LinkedIn Account of Tinkerhub.rit"
            },
            {
                heading: "Mail",
                link: "mailto:tinkerhub@rit.ac.in",
                description: "Official mail of Tinkerhub.rit"
            },
        ]);
    },[]);


    useEffect(() => {
        let arr=[]
        for (let i = 0; i < innerElementObj.length; i++) {
            arr.push(<Element key={i} heading={innerElementObj[i].heading} link={innerElementObj[i].link} description={innerElementObj[i].description}></Element>);
        }
        setInnerElements(arr);
    }, [innerElementObj]);


    return (
        <ContainerElements Elements={innerElements}></ContainerElements>
    )
}

export default OurLinks
