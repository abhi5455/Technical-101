import '../components/Element/Element.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


function Interesting() {
    let [innerElementObj, setInnerElementObj] = useState([]);
    let [innerElements, setInnerElements] = useState([]);

    useEffect(() => {
        setInnerElementObj([
            {
                heading: "Awesome-Resources",
                link: "https://shahednasser.github.io/awesome-resources/",
                description: "List of helpful resources"
            },
            {
                heading: "RoadMap",
                link: "https://roadmap.sh/",
                description: "The site guides developers in picking up a path and guide their learnings."
            },
            {
                heading: "VirusTotal",
                link: "https://www.virustotal.com/gui/home/upload",
                description: "Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches."
            },
            {
                heading: "Reading Stuffs",
                link: "https://ndl.iitkgp.ac.in/",
                description: "A Single-Source Knowledge Repository."
            },
            {
                heading: "What If",
                link: "https://what-if.xkcd.com/",
                description: "Serious Scientific Answers to Absurd Hypothetical Questions."
            },
            {
                heading: "AsciiFlow",
                link: "https://asciiflow.com/#/",
                description: "Draw infinite ascii diagrams."
            },
            {
                heading: "Games",
                link: "https://gamesnacks.com/",
                description: "Enjoy your Fun time."
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

export default Interesting
