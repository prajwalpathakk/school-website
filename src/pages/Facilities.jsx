const items = [
  ["🔬", "Science Lab", "Hands-on experiments for practical learning."],
  ["💻", "Computer Lab", "Computer classes with internet access."],
  ["📖", "Library", "A quiet space with textbooks and story books."],
  ["🏠", "Hostel", "Safe, clean rooms with supervised study time."],
  ["🍽️", "Canteen", "Healthy and hygienic meals."],
  ["⚽", "Playground", "Sports and outdoor activities every day."],
  ["🚌", "Transport", "School bus service for day students."],
  ["🩺", "First Aid", "Basic medical care and first-aid support."],
];

export default function Facilities() {
  return (
    <>
      <section className="page-header">
        <h1>School Facilities</h1>
        <p>Everything students need to learn and grow</p>
      </section>
      <section className="section">
        <div className="container grid-4">
          {items.map(([i, t, d]) => (
            <div className="card center" key={t}>
              <div className="icon">{i}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}