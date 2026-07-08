import "./Order.css";

function Order() {
  return (
    <section className="order" id="order" data-aos="fade-up">
      <div className="order-header">
        <p>PLACE YOUR ORDER</p>
        <h2>
          Freshly Crafted.
          <br />
          Ready For You.
        </h2>
      </div>
      <form className="order-form">
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@email.com" />
        </div>
        <div className="input-group">
          <label>Select Drink</label>
          <select>
            <option>Espresso</option>
            <option>Latte</option>
            <option>Cappuccino</option>
            <option>Mocha</option>
            <option>Cold Brew</option>
            <option>Flat White</option>
          </select>
        </div>
        <div className="input-group">
          <label>Quantity</label>
          <select>
            <option>1 Cup</option>
            <option>2 Cups</option>
            <option>3 Cups</option>
            <option>4 Cups</option>
          </select>
        </div>
        <div className="input-group full-width">
          <label>Special Instructions</label>
          <textarea
            rows="5"
            placeholder="Anything you'd like us to know..."
          ></textarea>
        </div>
        <button type="submit">Place Order</button>
        <div className="order-info">
          <div>☕ Freshly Roasted Daily</div>
          <div>🚚 Ready Within 15 Minutes</div>
          <div>🌿 100% Premium Arabica Beans</div>
        </div>
      </form>
    </section>
  );
}

export default Order;
