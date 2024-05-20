import Home from "./components/Home";
import Proyects from "./components/Proyects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

// "text-5xl bg-gradient-to-r from-orange-0 to-blue-0 bg-clip-text text-transparent"

function App() {
    return (
        <div className="max-w-screen bg-black-0">
            <Home />
            <Proyects />
            <Technologies />
            <Contact />
        </div>
    );
}

export default App;
