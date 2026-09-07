import "./Story.css";
import story from "../assets/images/story.jpeg";

function Story() {
  return (
    <section className="story" id="story">
      <div className="story-image" data-aos="fade-right">
        <img src={story} alt="Barista crafting coffee" />
      </div>

      <div className="story-content">
        <p className="story-tag">OUR STORY</p>

        <h2>
          Every Cup Begins
          <br />
          With Patience.
        </h2>

        <blockquote>
          "We believe coffee isn't rushed. From the first roast to the final
          pour, every detail deserves care."
        </blockquote>

        <p className="story-text" data-aos="fade-left">
          Ember & Oak was born from a simple belief: coffee should create
          moments, not just fill cups. Every bean is carefully selected, every
          drink crafted with intention, and every guest welcomed like an old
          friend.
        </p>

        <div className="signature">— Ember & Oak</div>
      </div>
    </section>
  );
}

export default Story;
