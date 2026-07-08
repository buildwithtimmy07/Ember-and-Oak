import "./Menu.css";

import espresso from "../../assets/images/espresso.jpeg";
import latte from "../../assets/images/icedlatte.jpeg";
import cappuccino from "../../assets/images/cappuccino.jpeg";
import mocha from "../../assets/images/mocha.jpeg";
import coldbrew from "../../assets/images/coldbrew.jpeg";
import flatwhite from "../../assets/images/flatwhite.jpeg";

const drinks = [
  {
    image: espresso,
    name: "Espresso",
    price: "$4",
    desc: "Rich, bold and perfectly balanced.",
  },
  {
    image: latte,
    name: "Iced-Latte",
    price: "$6",
    desc: "Silky milk with smooth espresso.",
  },
  {
    image: cappuccino,
    name: "Cappuccino",
    price: "$6",
    desc: "Velvety foam with deep aroma.",
  },
  {
    image: mocha,
    name: "Mocha",
    price: "$7",
    desc: "Chocolate meets artisan coffee.",
  },
  {
    image: coldbrew,
    name: "Cold Brew",
    price: "$5",
    desc: "Slow brewed for a refreshing finish.",
  },
  {
    image: flatwhite,
    name: "Flat White",
    price: "$6",
    desc: "Smooth texture with bold character.",
  },
];

function Menu() {
  return (
    <section className="menu" id="menu" data-aos="fade-up">
      <div className="section-title">
        <p>OUR SIGNATURE MENU</p>

        <h2>
          Crafted One Cup
          <br />
          At A Time
        </h2>
      </div>

      <div className="menu-grid">
        {drinks.map((drink, index) => (
          <div className="menu-card" key={index}>
            <div className="menu-image">
              <img src={drink.image} alt={drink.name} />
            </div>

            <div className="menu-info">
              <div className="menu-top">
                <h3>{drink.name}</h3>

                <span>{drink.price}</span>
              </div>

              <p>{drink.desc}</p>

              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
