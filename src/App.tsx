import About from "./components/About";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Modal from "./components/Modal";
import Preloader from "./components/Preloader";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
function App() {
    return (
        <div>
            {/* <Preloader /> */}
            <Header />
            <Modal />
            <MainBanner />
            <Services />
            <About />
            <Clients />
            <Pricing />
            <Footer />
        </div>
    );
}

export default App;
