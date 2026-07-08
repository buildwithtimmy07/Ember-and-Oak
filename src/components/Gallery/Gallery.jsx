import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpeg";
import gallery2 from "../../assets/images/gallery2.jpeg";
import gallery3 from "../../assets/images/gallery3.jpeg";
import gallery4 from "../../assets/images/gallery4.jpeg";

function Gallery() {
  return (
    <section className="gallery" id="gallery" data-aos="zoom-in">
      <div className="gallery-header">
        <p>INSIDE EMBER & OAK</p>

        <h2>
          Moments Worth
          <br />
          Savoring
        </h2>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item large">
          <img src={gallery1} alt="Gallery 1" />
          <div className="overlay">
            <h3>Morning Rituals</h3>
          </div>
        </div>

        <div className="gallery-item">
          <img src={gallery2} alt="Gallery 2" />
          <div className="overlay">
            <h3>Warm Atmosphere </h3>
          </div>
        </div>

        <div className="gallery-item">
          <img src={gallery3} alt="Gallery 3" />
          <div className="overlay">
            <h3>Crafted Daily</h3>
          </div>
        </div>

        <div className="gallery-item wide">
          <img src={gallery4} alt="Gallery 4" />
          <div className="overlay">
            <h3>Freshly Brewed</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
