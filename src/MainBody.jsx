import Hero from "./Hero";
import HowItWorks from "./HowItWorks"
export default function MainBody() {
    return (
        <main>
            <Hero />           
            <hr className="separator" />
            <HowItWorks />
        </main>
    );
}
