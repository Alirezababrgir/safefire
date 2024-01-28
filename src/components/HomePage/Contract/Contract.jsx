import "./index.css"
import bitkip from "../../../assets/banners/bitkip.png"
import ScrollAnimation from 'react-animate-on-scroll';

const Contract = () => {
    return (

        <div class=" testimonial-container container">
            <ScrollAnimation animateIn="fadeIn" >
                <div id="addrwallets" class="row">
                    <div className="row text-center mb-4 mt-4">
                        <ScrollAnimation animateIn="fadeIn">
                            <h2 className="mb-2 mt-3 ">Smart Contract</h2>
                        </ScrollAnimation>
                        <div className="col-md-6 mt-4">
                            <p class="addr-text text-muted">
                                A smart contract is a self-executing program that automates actions required in a contract. Upon completion, transactions become traceable and irreversible.
                                Smart contracts allow for trustworthy transactions and agreements between disparate and anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.
                            </p>
                        </div>
                        <div className="col-md-6 mt-4">
                            <img height={250} id="imgaddr" src="https://mindinfoservices.com/assets/img/SMart%20Contract%20Development.png" alt="addr" />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <div id="addrwallets" class="row boxes">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row text-center mb-4 mt-4">
                        <ScrollAnimation animateIn="fadeIn">
                            <h2 className="mb-2 mt-3 ">Contract Address</h2>
                        </ScrollAnimation>
                        <div className="col-md-6 mt-4">
                            <img id="imgaddr" src="https://ethereum.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffind-wallet-hero.c9025bb3.png&w=640&q=75" alt="addr" />
                        </div>
                        <div className="col-md-6 mt-4">
                            <p class="addr-text text-muted">
                                A smart contract is a self-executing program that automates actions required in a contract. Upon completion, transactions become traceable and irreversible.
                                Smart contracts allow for trustworthy transactions and agreements between disparate and anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <div class="row text-center boxes">
                <div style={{ width: "100%" }} className="row text-center mt-4">
                    <ScrollAnimation animateIn="fadeIn">
                        <h3 className="mb-2 text-muted">Connect To Safeboxes With the Following Wallets</h3>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" delay={100}>
                        <div style={{ width: "100%" }} className="row justify-content-center">
                            <img className="walletphoto" src={bitkip} alt="trust" />
                            <img className="walletphoto" src="https://www.zenledger.io/wp-content/uploads/2023/01/60f6a9787b79c7dad2d95893_Trust-Wallet.png" alt="trust" />
                            <img className="walletphoto" src="https://www.zenledger.io/wp-content/uploads/2023/01/60f6bf5aa39a043929bba1a1_Metamask.png" alt="meta mask" />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

        </div >

    )
}
export default Contract;