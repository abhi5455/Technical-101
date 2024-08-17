import '../components/Element/Element.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


function AIModel() {
    let [innerElementObj, setInnerElementObj] = useState([]);
    let [innerElements, setInnerElements] = useState([]);

    useEffect(() => {
        setInnerElementObj([
            {
                heading: "ChatGPT",
                link: "https://chatgpt.com/",
                description: "Developed by OpenAI.",
            },
            {
                heading: "Gemini",
                link: "https://gemini.google.com/",
                description: "Developed by Google.",
            },
            {
                heading: "Copilot",
                link: "https://copilot.microsoft.com/",
                description: "Developed by Microsoft in collaboration with OpenAI.",
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

export default AIModel
