import "./Hero.css";
import hero from "../../assets/images/hero.jpeg";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-left">
        <p className="hero-tag">PREMIUM COFFEE EXPERIENCE</p>

        <h1>
          Crafted
          <br />
          Slowly.
          <br />
          Served
          <br />
          Beautifully.
        </h1>

        <p className="hero-text">
          Every cup is brewed with patience, roasted with intention, and served
          in a space designed to bring you comfort.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="primary-btn">
            Explore Menu
          </a>

          <a href="#story" className="secondary-btn">
            Our Story
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="Coffee Shop" />
        {/* 
        <div className="floating-card">
          <h3>Since 2026</h3>

          <p>Handcrafted Coffee</p>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
