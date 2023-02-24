import React from "react";

export default class Ad extends React.Component {
  onClickDiscardButton = () => {
    this.props.onDiscard(this.props.id);
  };
  render() {
    return (
      <article
        id={`adId-${this.props.id}`}
        className={`ad-card_${this.props.kind}`}
      >
        <picture>
          <img src="https://picsum.photos/seed/picsum/400/250" alt="imagen" />
        </picture>
        <div class="text-info">
          <a href="/" class="link-inmobiliaria">
            <img
              src="https://picsum.photos/seed/picsum/75/35"
              alt="inmobiliaria"
            />
          </a>
          <h2>
            <a href="/">{this.props.title}</a>
          </h2>
          <strong class="price">1.000.000 €</strong>
          <div class="props">
            <span>3 hab.</span>
            <span>143 m²</span>
            <span>Bajo exterior con ascensor</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            corporis ipsam obcaecati maxime.
          </p>
          <div class="buttons">
            <button onClick={this.onClickDiscardButton}> Discard </button>
          </div>
        </div>
      </article>
    );
  }
}
