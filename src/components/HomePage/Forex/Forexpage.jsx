import "./index.css"
import ForexBanner from "../../../assets/banners/FOREX.jpg"
import { NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Forex = () => {
    return (
        <div style={{ height: "100vh", width: "100%" }} className="container-fluid  texture">
              <HelmetProvider>
                <Helmet><title>SAFEBOXES | FOREX</title></Helmet>
            <div class="container py-4b">
                <h5 class="h1 text-center mt-4 " id="pageHeaderTitle">
                    <NavLink to={"/"} href="#"><i style={{ fontSize: "2.5rem" }} class="bi bi-caret-left text-muted" /></NavLink>
                    FOREX
                </h5>
                <article class="postcard dark red mt-4">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src={ForexBanner} alt="Image Title" />
                    </a>
                    <div class="postcard__text" >
                        <h1 class="postcard__title red"><a href="#">What Is Forex ?</a></h1>
                        <div class="postcard__bar mb-4"></div>
                        <div class="postcard__subtitle small">

                        </div>
                        <div class="postcard__preview-txt">
                            The Forex (foreign exchange market) , following the etablissemang of the flexible exchange rate system after the prominent Bretton Woods agreements in the 1970s, transformed into one of the world’s largest financial markets.
                            This market not only impacts international trade and investments but also, due to its easy accessibility and influence on currency rates, holds a vital position in global economies.
                            The prominent role of the Forex market in the global economy is clearly evident, and it is predicted that this market will be more influential than ever in various economic dimensions in the future. The centrality of the forex market lies not only in facilitating global trade and international investments but also as a determinant of currency rates, exerting widespread effects on price levels, exports, and consequently, the growth of various economies.
                            Additionally, Forex, as the world’s largest financial market for currency transactions and other major financial markets such as stocks, capital, and commodities, provides the opportunity to trade in various fields, ranging from buying and selling shares of major companies to dealing in oil, gold, currencies, and more. Forex transactions amount to billions of dollars daily and continue around the clock worldwide.”
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
export default Forex;

