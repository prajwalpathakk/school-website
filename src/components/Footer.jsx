import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [done, setDone] = useState(false);

  return (
    <footer className="footer">
      <div className="container footer-grid4">
        <div>
          <h3>Shree Goldhap Sunshine Boarding School</h3>
          <p>Quality education and a caring boarding environment in Haldibari-1, Jhapa.</p>
          <p>📍 Haldibari-1, Jhapa, Nepal</p>
          <p>📞 +977-XXXXXXXXXX</p>
          <p>✉️ info@yourschool.edu.np</p>
        </div>
        <div>
          <h4>About</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/admissions">Admission</Link>
          <Link to="/academics">Academics</Link>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Enter your email for school updates.</p>
          <form className="news-form" onSubmit={(e) => { e.preventDefault(); setDone(true); e.target.reset(); }}>
            <input type="email" required placeholder="Your email" />
            <button className="btn btn-gold" type="submit">Subscribe</button>
          </form>
          {done && <p className="ok">✅ Subscribed!</p>}
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Shree Goldhap Sunshine Boarding School. All rights reserved.
      </div>
    </footer>
  );
}