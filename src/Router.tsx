import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Search from "./screens/Searchs";
import NetflixHeader from "./components/Header";
import Series from "./screens/Series";

function Router(){
    return (
        <BrowserRouter>
            <NetflixHeader />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/series" element={<Series />}/>
                <Route path="/search" element={<Search />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;