import React, { useRef } from "react";

const App = () => {
  // References to sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    const element = ref.current;
    if (element) {
      const offsetTop = element.offsetTop;
      const duration = 1000; // duration in milliseconds
      const start = window.pageYOffset;
      const distance = offsetTop - start;
      const startTime = performance.now();

      const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="nav-content">
        <div className="store-name">
          <h1>RAY STORE</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <button onClick={() => scrollToSection(homeRef)}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(productsRef)}>Products</button>
          </li>
        </ul>
        <button
          className="contact-button"
          onClick={() => scrollToSection(contactRef)}
        >
          CONTACT
        </button>
      </nav>

      {/* Sections */}
      <main>
        <section id="home" ref={homeRef}>
          <div className="home-content">
            <h1>Ray Store</h1>
            <p>Our Main Goal Is Continuously Satisfying Our Clients</p>
            <button onClick={() => scrollToSection(productsRef)}>VIEW PRODUCTS</button>
          </div>
        </section>

        <section id="about" ref={aboutRef}>
          <h1>Welcome To Our Company</h1>
          <p>
            Ray Store is your ultimate destination for cutting-edge tech
            devices...
          </p>
        </section>

        <section id="product" ref={productsRef}>
          <h1>Our Products</h1>
          {/* Add your product grid here */}
        </section>

        <footer id="contact" ref={contactRef}>
          <h2>Contact Us</h2>
          <p>We're here to assist you</p>
          {/* Add contact form */}
        </footer>
      </main>
    </div>
  );
};

export default App;
