import { useState } from "react";

const steps = [
  ["1", "Submit Inquiry", "Fill the form below or visit our office."],
  ["2", "Campus Visit", "Tour the school and meet our faculty."],
  ["3", "Assessment", "A friendly interaction to understand your child."],
  ["4", "Enrollment", "Complete documents and confirm admission."],
];

export default function Admissions() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // connect to your backend/email service here
    e.target.reset();
  };

  return (
    <>
      <section className="page-header">
        <h1>Admissions</h1>
       <p>Join the Sunshine family</p>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">How to Apply</h2>
          <div className="grid-4">
            {steps.map(([n, t, d]) => (
              <div className="card center" key={n}>
                <div className="step">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <h2 className="title">Admission Inquiry</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input required placeholder="Parent's Name" />
            <input required placeholder="Student's Name" />
            <input required type="email" placeholder="Email" />
            <input required placeholder="Phone" />
            <select required defaultValue="">
              <option value="" disabled>Select Grade</option>
              {[...Array(12)].map((_, i) => (
                <option key={i}>Grade {i + 1}</option>
              ))}
            </select>
            <textarea rows="4" placeholder="Message (optional)" />
            <button className="btn btn-gold" type="submit">Submit Inquiry</button>
            {sent && <p className="success">✅ Thank you! We will contact you soon.</p>}
          </form>
        </div>
      </section>
    </>
  );
}