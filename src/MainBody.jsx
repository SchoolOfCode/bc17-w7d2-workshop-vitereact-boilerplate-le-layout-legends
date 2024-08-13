import Hero from "./Hero";
import Tile from "./Tile";

export default function MainBody() {
    return (
        <main>
            <Hero />
           
            <hr className="separator" />

            <Tile 
            image="https://github.com/SchoolOfCode/frontend-eng-example/blob/main/images/how-it-works-1.png"
            />
           

        </main>
    );
}
