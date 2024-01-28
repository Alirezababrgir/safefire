import "./index.css"
import Forexbrokerbanner from "../../../assets/banners/FOREXBROKER.jpg"
import { NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ForexBroker = () => {
    return (
        <div style={{ height: "100vh", width: "100%" }} className="container-fluid  texture">
            <HelmetProvider>
                <Helmet><title>SAFEBOXES | FOREXBROKER</title></Helmet>
                <div class="container py-4b">
                    <h5 class="h1 text-center mt-4 " id="pageHeaderTitle">
                        <NavLink to={"/"} href="#"><i style={{ fontSize: "2.5rem" }} class="bi bi-caret-left text-muted" /></NavLink>
                        FOREX BROKER
                    </h5>
                    <article class="postcard dark red mt-4">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={Forexbrokerbanner} alt="Image Title" />
                        </a>
                        <div class="postcard__text" >
                            <h1 class="postcard__title red"><a href="#">What Is Forex Broker ?</a></h1>
                            <div class="postcard__bar mb-4"></div>
                            <div class="postcard__subtitle small">
                            </div>
                            <div class="postcard__preview-txt">
                                In the forex market, brokers function as primary intermediaries. A forex broker, as a financial entity, enables individuals to participate in the global trading market and benefit from the advantages and opportunities it offers.
                                In simpler terms, just as local banks connect individuals to the banking system, brokers also facilitate this connection between traders and the forex market.
                                These brokers provide capital security and necessary facilities for conducting transactions by offering trading platforms. Acting as an essential and secure link between traders and the market, selecting a reputable broker with a proven track record and required licenses is a highly critical measure for ensuring the safety of investments.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                                <li class="tag__item play red">
                                    <a href="#"><i class="fas fa-play mr-2 "></i>Play Episode</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div >
            </HelmetProvider>
        </div >

    )
}
export default ForexBroker;