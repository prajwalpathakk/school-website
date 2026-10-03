const photos = [1, 2, 3, 4, 5, 6];

export default function Gallery() {
  return (
    <>
      <section className="page-header">
        <h1>Gallery</h1>
        <p>Moments from our school life</p>
      </section>
      <section className="section">
        <div className="container gallery">
          {photos.map((n) => (
            <img key={n} src={`/gallery/${n}.jpg`} alt={`School photo ${n}`} loading="lazy" />
          ))}
        </div>
      </section>
    </>
  );
}