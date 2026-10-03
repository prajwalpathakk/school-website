import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2 className="title left">Get in Touch</h2>
          <p>📍 Haldibari-1, Jhapa, Nepal</p>
<p>📞 +977-XXXXXXXXXX</p>
<p>✉️ info@yourschool.edu.np</p>
<p>🕘 Sun–Fri: 8:00 AM – 4:00 PM</p>
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              e.target.reset();
            }}
          >
            <input required placeholder="Your Name" />
            <input required type="email" placeholder="Your Email" />
            <textarea required rows="5" placeholder="Your Message" />
            <button className="btn btn-gold" type="submit">Send Message</button>
            {sent && <p className="success">✅ Message sent!</p>}
          </form>
        </div>
      </section>
    </>
  );
}