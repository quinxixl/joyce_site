import MainPage from "./Pages/MainPage";
import SmoothScroll from "./components/animation/Lenis";

function App() {
  return (
    <div className="App">
        <SmoothScroll>
            <MainPage />
        </SmoothScroll>
    </div>
  );
}

export default App;
