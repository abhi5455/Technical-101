import Header from "../components/header/Header.jsx";
import HomeElement from "../components/HomeElement/HomeElement.jsx";
import {useEffect, useState} from "react";

export default function Home() {
    let [homeElementsObj, setHomeElementsObj] = useState([]);
    let [homeElements, setHomeElements] = useState([]);
    useEffect(() => {
        setHomeElementsObj([
            {
                section: "Resources",
                path: "/Resources"
            },
            {
                section: "OurLinks",
                path: "/OurLinks"
            },
            {
                section: "Student Projects",
                path: "/StudentProjects"
            },
            {
                section: "Interesting",
                path: "/interesting"
            }
        ])
    }, []);
    useEffect(()=>{
        function updateHomeElements(){
            let arr=[];
            for(let i=0;i<homeElementsObj.length;i++){
                arr=[...arr,<HomeElement key={i} section={homeElementsObj[i].section} path={homeElementsObj[i].path}></HomeElement> ]
            }
            setHomeElements(arr);
        }
        updateHomeElements();
    },[homeElementsObj])
    return (
        <>
            <Header></Header>
            <div className="container">
                {homeElements}
            </div>
        </>
    )
}