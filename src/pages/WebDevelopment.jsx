import '../components/Element/Element.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


function WebDevelopment() {
    let [innerElementObj, setInnerElementObj] = useState([]);
    let [innerElements, setInnerElements] = useState([]);

    useEffect(() => {
        setInnerElementObj([
            {
                heading: "Frond end-Roadmap",
                link: "https://roadmap.sh/frontend",
                description: "Road map for Frond-End Development",
            },
            {
                heading: "Frond End",
                link: "https://youtu.be/zJSY8tbf_ys",
                description: "YouTube channel for learning Frond-End",
            },
            {
                heading: "JavaScript",
                link: "https://www.w3schools.com/js/default.asp",
                description: "JavaScript Tutorial - w3 Schools",
            },
            {
                heading: "css",
                link: "https://www.w3schools.com/css/default.asp",
                description: "css Tutorial - w3 Schools",
            },
            {
                heading: "html",
                link: "https://www.w3schools.com/html/default.asp",
                description: "html Tutorial - w3 Schools",
            },
            {
                heading: "Web Development",
                link: "https://www.youtube.com/@webdevsimplified",
                description: "YouTube channel for Web development",
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

export default WebDevelopment
