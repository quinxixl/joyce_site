import MainPage from "./Pages/MainPage";
import SmoothScroll from "./components/animation/Lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./Pages/Catalog";

function App() {
    return (
        <Router>
            <div className="App">
                <SmoothScroll>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/catalog" element={<Catalog />} />
                    </Routes>
                </SmoothScroll>
            </div>
        </Router>
    );
}

export default App;