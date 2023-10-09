const Ad = ({ id, kind, onDiscard, title }) => {
  const onClickDiscardButton = () => {
    onDiscard(id);
  };

  return (
    <article
      id={`adId-${id}`}
      className={`ad-card_${kind}`}
    >
      <picture>
        <img src="https://picsum.photos/seed/picsum/400/250" alt="imagen" />
      </picture>
      <div className="text-info">
        <a href="/" className="link-inmobiliaria">
          <img
            src="https://picsum.photos/seed/picsum/75/35"
            alt="inmobiliaria"
          />
        </a>
        <h2>
          <a href="/">{title}</a>
        </h2>
        <strong className="price">1.000.000 €</strong>
        <div className="props">
          <span>3 hab.</span>
          <span>143 m²</span>
          <span>Bajo exterior con ascensor</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          corporis ipsam obcaecati maxime.
        </p>
        <div className="buttons">
          <button onClick={onClickDiscardButton}> Discard </button>
        </div>
      </div>
    </article>
  );
}

export default Ad;
