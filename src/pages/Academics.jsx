const levels = [
  ["Primary (1–5)", ["English & Languages", "Mathematics", "Environmental Science", "Art & Music", "Physical Education"]],
  ["Middle (6–8)", ["English & Literature", "Mathematics", "General Science", "Social Studies", "Computer Basics"]],
  ["High (9–12)", ["Science Stream", "Commerce Stream", "Humanities Stream", "Computer Science", "Career Counselling"]],
];

export default function Academics() {
  return (
    <>
      <section className="page-header">
        <h1>Academics</h1>
        <p>A balanced curriculum for every learner</p>
      </section>

      <section className="section">
        <div className="container grid-3">
          {levels.map(([title, subjects]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <ul className="list">
                {subjects.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}