import '../components/Element/Element.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


function AcademicDiscounts() {
    let [innerElementObj, setInnerElementObj] = useState([]);
    let [innerElements, setInnerElements] = useState([]);

    useEffect(() => {
        setInnerElementObj([
            {
                heading: "JetBrains",
                link: "https://www.jetbrains.com/shop/eform/students",
                description: "Get Jet Brains products free for students using College mail id.",
            },{
                heading: "Github Developer pack",
                link: "https://education.github.com/pack",
                description: " GitHub Student Developer Pack.",
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

export default AcademicDiscounts
