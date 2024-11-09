import '../components/Element/Element.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


export default function AIModel() {
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
                heading: "BlackBox AI",
                link: "https://www.blackbox.ai/",
                description: "Blackbox AI is designed to integrate into coding environments",
            },
            {
                heading: "Microsoft Copilot",
                link: "https://copilot.microsoft.com/",
                description: "Developed by Microsoft in collaboration with OpenAI.",
            },
            {
                heading: "Perplexity AI",
                link: "https://www.perplexity.ai/",
                description: "Developed by Perplexity.",
            },
            {
                heading: "Stable Diffusion",
                link: "https://stabledifffusion.com/",
                description: "Free Generate Images from Simple Text Prompts.",
            },
            {
                heading: "Hugging Face",
                link: "https://huggingface.co/",
                description: "Provides a rich collection of pre-trained transformer models.",
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
