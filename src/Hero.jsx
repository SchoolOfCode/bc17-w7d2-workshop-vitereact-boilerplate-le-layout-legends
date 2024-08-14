export default function Hero() {
    return (
        <section className="hero-section">
            <img
                src="https://raw.githubusercontent.com/SchoolOfCode/frontend-eng-example/main/images/hero-mobile.png"
                srcset="https://raw.githubusercontent.com/SchoolOfCode/frontend-eng-example/main/images/hero-mobile.png 900w, https://raw.githubusercontent.com/SchoolOfCode/frontend-eng-example/main/images/hero-mobile.png 901w"
                sizes="(max-width: 900px) 100vw, 901px"
                alt="Cozy living room with a fireplace"
                className="hero-image"
            />

            <div className="hero-description">
                <p className="hero-headline">
                    Discover the <br />
                    perfect fireplace ...
                </p>
                <p className="consultation-paragraph">
                    Book consultation:
                    <span className="number-span">0121 345 6789</span>
                </p>
            </div>
        </section>
    );
}
