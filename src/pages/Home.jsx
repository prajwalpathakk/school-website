import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import Counter from "../components/Counter";

const features = [
  ["🏫", "Why Choose Us?", "A caring environment with dedicated teachers and student-centred learning."],
  ["🎓", "Quality Education", "Strong academics with a focus on English, science, math and computers."],
  ["🌟", "Holistic Development", "Leadership, discipline, sports and creativity alongside studies."],
  ["🏠", "Safe Boarding", "Comfortable hostel with healthy food, supervision and study hours."],
];

const programs = [
  ["🌱", "Primary School", "Nursery – Class 5", "A joyful start with reading, math and creativity."],
  ["📚", "Middle School", "Class 6 – 8", "Critical thinking, curiosity and teamwork."],
  ["🔬", "Secondary School", "Class 9 – 10", "SEE preparation with career guidance."],
];

const reviews = [
  ["Parent of Class 5 student", "My child has become confident and disciplined. The teachers really care."],
  ["Parent of Class 8 student", "Good studies and a safe hostel. We are very happy with the progress."],
  ["Parent of Class 3 student", "Friendly environment and regular communication with parents."],
];

const faqs = [
  ["What classes does the school offer?", "We offer classes from Nursery to Class 10, with boarding for students who need it."],
  ["Is hostel facility available?", "Yes. We have a safe, supervised hostel with meals and evening study hours."],
  ["How do I apply for admission?", "Fill the inquiry form on the Admissions page or visit the school office in Haldibari-1."],
  ["Which curriculum is followed?", "We follow the Nepal Government curriculum with extra activities and skills training."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <HeroSlider />

      {/* Features */}
      <section className="section features">
        <div className="container grid-4">
          {features.map(([i, t, d]) => (
            <div className="card center" key={t}>
              <div className="icon">{i}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section alt">
        <div className="container two-col about-home">
          <div className="about-img">
            <img src="/school.jpg" alt="Our school" />
            <div className="years"><b><Counter end={20} suffix="+" /></b><span>Years of Experience</span></div>
          </div>
          <div>
            <p className="eyebrow">About Our School</p>
            <h2 className="title left">Discover the Story Behind Sunshine</h2>
            <p>
              Shree Goldhap Sunshine Boarding School in Haldibari-1, Jhapa provides a balance of
              academics, discipline, creativity and life skills, preparing students for higher
              studies and for a meaningful life.
            </p>
            <ul className="list">
              <li>Excellence in education</li>
              <li>Trusted by local families</li>
              <li>Safe and caring boarding environment</li>
            </ul>
            <Link to="/about" className="btn btn-gold" style={{ marginTop: 18 }}>Read More</Link>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="counters">
        <div className="container counters-grid">
          <div><h2><Counter end={20} suffix="+" /></h2><p>Years of Excellence</p></div>
          <div><h2><Counter end={500} suffix="+" /></h2><p>Happy Students</p></div>
          <div><h2><Counter end={30} suffix="+" /></h2><p>Expert Teachers</p></div>
          <div><h2><Counter end={95} suffix="%" /></h2><p>Success Rate</p></div>
        </div>
      </section>

      {/* Programs */}
      <section className="section">
        <div className="container">
          <p className="eyebrow center-text">Learn at Your Pace</p>
          <h2 className="title">Academic Programs</h2>
          <div className="grid-3">
            {programs.map(([icon, t, level, d]) => (
              <Link to="/academics" className="card program" key={t}>
                <div className="icon">{icon}</div>
                <span className="date">{level}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <b className="more">Learn more →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section alt">
        <div className="container">
          <p className="eyebrow center-text">Testimonials</p>
          <h2 className="title">Voices of Parents</h2>
          <div className="grid-3">
            {reviews.map(([who, text]) => (
              <div className="card quote" key={who}>
                <div className="stars">★★★★★</div>
                <p>“{text}”</p>
                <b>{who}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow center-text">Questions</p>
          <h2 className="title">Frequently Asked</h2>
          <div className="faq">
            {faqs.map(([q, a], idx) => (
              <div className={openFaq === idx ? "faq-item open" : "faq-item"} key={q}>
                <button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                  {q} <span>{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Give your child the best start</h2>
          <p>Book a campus visit and meet our teachers.</p>
          <Link to="/contact" className="btn btn-gold">Schedule a Visit</Link>
        </div>
      </section>
    </>
  );
}