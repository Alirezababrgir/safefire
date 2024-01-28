import "./index.css"
const Explor = () => {

    return (
        <div className="container-fluid test2container p-4">
            <div id="tsparticles"></div>
            <section className="test2">
                <div class="content">
                    <h1>Let's Trading History!</h1>
                    <p>
                        Our tours are designed to transport you to the heart of the world's
                        most captivating destinations, creating memories that will last a
                        lifetime. You can uncover the hidden gems, iconic landmarks, and
                        unique cultural treasures that make each destination special.
                    </p>
                    <button>Explorer</button>
                </div>

                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847" />
                            <div class="cost">from $380 per group</div>
                            <div class="overlay">
                                <h1>Edinburgh Guided Tour</h1>
                                <p>
                                    Explore the city's majestic castles and fascinating history by
                                    joining our guided tour for an unforgettable journey through
                                    Scotland's capital.
                                </p>
                                <div class="ratings">
                                    <div class="stars">
                                        <ion-icon class="star" name="star"></ion-icon>
                                        <ion-icon class="star" name="star"></ion-icon>
                                        <ion-icon class="star" name="star"></ion-icon>
                                        <ion-icon class="star" name="star"></ion-icon>
                                        <ion-icon class="star" name="star"></ion-icon>
                                    </div>
                                    <span>307 reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Explor;