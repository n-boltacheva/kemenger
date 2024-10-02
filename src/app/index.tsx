import {About, Menu} from '@features';
import  { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function App() {
    return <HashRouter>
        <Menu/>
        <div className="content">

            <Routes>
                <Route path="/" element={<About/>}/>
            </Routes>
        </div>
    </HashRouter>
}
export default App;