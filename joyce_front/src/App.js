import MainPage from "./Pages/MainPage";
import SmoothScroll from "./components/animation/Lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./Pages/Catalog";
import {useState} from "react";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prev => {
            const index = prev.findIndex(item => item.name === product.name);
            if (index !== -1) {
                const newCart = [...prev];
                newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };
                return newCart;
            } else {
                return [...prev, { name: product.name, price: product.price, previewPicture: product.previewPicture ,quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productName) => {
        setCart(prev => {
            const index = prev.findIndex(item => item.name === productName);
            if (index === -1) return prev;
            const newCart = [...prev];
            if (newCart[index].quantity > 1) {
                newCart[index] = { ...newCart[index], quantity: newCart[index].quantity - 1 };
            } else {
                newCart.splice(index, 1);
            }
            return newCart;
        });
    };
    

    return (
        <Router>
            <div className="App">
                <SmoothScroll>
                    <Routes>
                        <Route path="/" element={<MainPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
                        <Route path="/catalog" element={<Catalog addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />} />
                    </Routes>
                </SmoothScroll>
            </div>
        </Router>
    );
}

export default App;