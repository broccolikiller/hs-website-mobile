import {useState} from 'react'
import {Header} from "./layout/components/Header.jsx";
import {useRoutes} from "react-router-dom";
import routes from "./router/index.jsx";
import {Footer} from "./layout/components/Footer.jsx";

function App() {
    const element = useRoutes(routes)
    const [count, setCount] = useState(0)
    return (
        <>
            <Header/>
            <div className="pt-10 text-base">
                {element}
            </div>
            <Footer/>
        </>
    )
}

export default App
