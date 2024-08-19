import '../components/Element/Element.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


function Python() {
    let [innerElementObj, setInnerElementObj] = useState([]);
    let [innerElements, setInnerElements] = useState([]);

    useEffect(() => {
        setInnerElementObj([
            {
                heading: "Programming with Mosh",
                link: "https://youtu.be/_uQrJ0TkZlc",
                description: "YouTube channel for learning Python",
            },
            {
                heading: "Neso Academy",
                link: "https://www.youtube.com/@nesoacademy",
                description: "YouTube channel for learning Python",
            },
            {
                heading: "Indently",
                link: "https://www.youtube.com/@indently",
                description: "YouTube channel for learning Python",
            },
            {
                heading: "Tutorial",
                link: "https://www.w3schools.com/python/",
                description: "Python Tutorial - w3 Schools",
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

export default Python
