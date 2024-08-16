import '../components/Element/Element.css'
import '../resize.css'
import Element from "../components/Element/Element.jsx";
import {useEffect, useState} from "react";
import ContainerElements from "../components/ContainerElements.jsx";


function RandomStuff() {
    let [innerElementObj, setInnerElementObj] = useState([]);
    let [innerElements, setInnerElements] = useState([]);

    useEffect(() => {
        setInnerElementObj([
            {
                heading: "Expense-Tracker",
                link: "https://abhi5455.github.io/E-Tracker/",
                description: "A website which keeps track users Expenses."
            },
            {
                heading: "Cave-Copter",
                link: "https://www.instagram.com/tinkerhub",
                description: "A game where you survive with a faulty helicopter in a cave."
            },
            {
                heading: "Todo-List",
                link: "https://abhi5455-todo-list.vercel.app/",
                description: "A Todo List app simplifies task management."
            },
            {
                heading: "Whatsapp-Sender",
                link: "https://fbn776.github.io/whatsapp/",
                description: "A simple tool to message numbers without actually saving them in your phone."
            },
            {
                heading: "Falling-Sand",
                link: "https://fbn776.github.io/falling-sand/",
                description: "A falling sand game using cellular automata."
            },
            {
                heading: "Unit-Converter",
                link: "https://abhi5455.github.io/Unit_Converter/",
                description: "This web app allows users to effortlessly convert between various units of measurement with accuracy and ease."
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

export default RandomStuff
