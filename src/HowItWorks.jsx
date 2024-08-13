import Tile from './Tile'

export default function HowItWorks() {
    return (


        <section id="how-it-works" className="how-it-works-section">
            <h2 className="how-it-works-text">How It Works</h2>
            <div className="tiles">

                <Tile image="" alt="Phone call illustration" title="Give us a call..." description="Call us and book in a Design Consultation on a date
                        and time that suits you."/>

                <Tile image="" alt="Home visit illustration" title="We come to you..." description="We come to your home to do an assessment of the space and to your style preference." />

                <Tile image="" alt="Fireplace recommendation illustration" title="We recommend..." description="We send you a bespoke set of fireplace recommendations." />
            </div>
        </section>
    );
}
