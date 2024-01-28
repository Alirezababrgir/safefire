import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Forex from "../Forex/ForexContainer";
import Packages from "../Packages/Packages";
import Safebox from "../Safebox/Safebox";
import Contract from "../Contract/Contract";
import logo from "../../../assets/banners/navlogo.png"
import "./index.css"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sidebar from "../../Navbar/Sidebar";
import videosafebo from "../../../assets/banners/city.mp4"


const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <HelmetProvider>
                <Helmet><title>SAFEBOXES | HOME</title></Helmet>
                <Sidebar />
                <Navbar />
                <section id="home" class="showcase-arean">
                    <video className="bg-video" muted loop autoPlay>
                        <source type="video/mp4" src={videosafebo} />
                    </video>
                    <div className="showcase-container">
                        <img  height={300} width={400} id="safe" src={logo} alt="logo" />
                        <h1 className="mb-4 fs-2 text-white">
                            <span>d</span>e<span>centralize the world</span>
                        </h1>
                        <button onClick={() => { navigate("/signup") }} class='glowing-btn mt-4 mb-4'><span class='glowing-txt'>S<span class='faulty-letter'>T</span>ART</span ></button>
                    </div>
                </section>
                <section id="safebox">
                    <Safebox />
                </section>
                <section id="forex">
                    <Forex />
                </section>
                <section id="packages">
                    <Packages />
                </section>
                <section id="contract">
                    <Contract />
                </section>
                <section id="about">
                    <Footer />
                </section>
            </HelmetProvider>
        </div>
    )
}
export default Home;