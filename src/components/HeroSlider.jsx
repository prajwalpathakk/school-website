import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  { tag: "A Community That Cares", title: "Building Character Alongside Knowledge", img: "/school.jpg" },
  { tag: "Safe Boarding Life", title: "A Second Home for Every Student", img: "/school.jpg" },
  { tag: "Admissions Open 2083", title: "Learning with Purpose, Always", img: "/school.jpg" },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const go = (n) => setI((n + slides.length) % slides.length);

  return (
    <section className="slider">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={idx === i ? "slide active" : "slide"}
          style={{ backgroundImage: `linear-gradient(110deg, rgba(11,37,69,.88), rgba(11,37,69,.35)), url(${s.img})` }}
        >
          <div className="container slide-content">
            <p className="tag">{s.tag}</p>
            <h1>{s.title}</h1>
            <p className="lead">Shree Goldhap Sunshine Boarding School, Haldibari-1, Jhapa</p>
            <Link to="/admissions" className="btn btn-gold">Get Admission</Link>
          </div>
        </div>
      ))}
      <button className="arrow left" onClick={() => go(i - 1)} aria-label="Previous">‹</button>
      <button className="arrow right" onClick={() => go(i + 1)} aria-label="Next">›</button>
      <div className="dots">
        {slides.map((_, idx) => (
          <button key={idx} className={idx === i ? "dot on" : "dot"} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}