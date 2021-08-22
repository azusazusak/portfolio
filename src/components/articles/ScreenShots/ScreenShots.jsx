import './ScreenShots.scss';

export default function ScreenShots({screenshots}) {

  const image = screenshots.images.map((image, index) => {
    return (
      <div key={index} className="imageBox">
        <h3>{image.name}</h3>
        <img src={(image.img)} alt={image.name} />
      </div>
    );
  })

  return (
    <article className="screenshots">
      <h2>{screenshots.title}</h2>
      <div className="container">
        {image}
      </div>
    </article>
  );

}