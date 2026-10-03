const values = [
  ["🎯", "Excellence", "We aim high in academics and character."],
  ["🤝", "Respect", "Kindness and inclusion in everything we do."],
  ["💡", "Innovation", "Curiosity and creativity drive our teaching."],
  ["🌍", "Responsibility", "Preparing global citizens who give back."],
];

export default function About() {
  return (
    <>
      <section className="page-header">
        <h1>About Us</h1>
        <p>Our story, mission and values</p>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2 className="title left">Our Story</h2>
            <p>
              Shree Goldhap Sunshine Boarding School, located in Haldibari-1, Jhapa, was founded
              with a simple vision: to offer quality education that develops the whole child.
              Today we are a growing community of dedicated students, teachers and parents.
            </p>
            <p>
              Our campus includes spacious classrooms, a science lab, a computer lab, a library,
              a playground and comfortable hostel facilities for boarding students.
            </p>
          </div>

          <div className="mv">
            <div className="card">
              <h3>Mission</h3>
              <p>To inspire lifelong learners who think critically and act with integrity.</p>
            </div>
            <div className="card">
              <h3>Vision</h3>
              <p>To be a leading school that shapes confident, compassionate leaders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="title">Core Values</h2>
          <div className="grid-4">
            {values.map(([i, t, d]) => (
              <div className="card center" key={t}>
                <div className="icon">{i}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}