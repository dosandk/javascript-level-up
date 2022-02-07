export default class MovieCard {
  element;

  constructor(
    {
      genres = [],
      id = '',
      overview = '',
      overviewStart = '',
      overviewEnd = '',
      popularity = '',
      poster_path = '',
      release_date = 0,
      title = '',
      favorite = ''
    } = {},
    {
      isCollectionItem = false,
      showFullInfo = false
    } = {}
  ) {
    this.id = id;
    this.favorite = favorite;
    this.genres = genres;
    this.overview = overview;
    this.overviewStart = overview;
    this.overviewEnd = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.title = title;

    // this.isCollectionItem = isCollectionItem;
    this.showFullInfo = showFullInfo;

    this.initialize();
  }

  initialize () {
    this.render();
    this.getSubElements();
    this.addEventListeners();
  }

  getGenres () {
    const result = this.genres.map(item => {
      return `<span>${item.name}</span>`
    })

    return result.join(' ');
  }

  get template() {
    return `
      <div class="card bg-light d-flex flex-fill">
        ${this.body}
        ${this.footer}
      </div>
    `;
  }

  getOverview () {
    const tooltip = this.showFullInfo ? '' : `data-tooltip="${this.overviewEnd}"`
    const fullOverview = this.showFullInfo ? this.overview : this.overviewStart;

    return `<p class="card-text" ${tooltip}>
      ${fullOverview}
    </p>`;
  }

  get body () {
    return `<div class="card-body">
      <div class="row">
        <div class="col-5 text-center">
          <img src="${this.poster_path}" loading="lazy" class="card-img-top" alt="${this.title}">
        </div>
        <div class="col-7">
        <a href="/movie-details/${this.id}">
          <h5 class="card-title">
            <b>${this.title} ${this.release_date}</b>
          </h5>
        </a>
        <ul class="list-unstyled">
          <li>
            <small class="text-muted">
              <b>Genres</b> ${this.getGenres()}
            </small>
          </li>
        </ul>

        <p class="card-text">
          ${this.getOverview()}
        </p>

        <small class="text-muted">
          <b>Popularity:</b> ${parseFloat(this.popularity).toFixed(2)}
        </small>
      </div>
      </div>
    </div>`;
  }

  get footer () {
    return `<div class="card-footer">
      <div class="text-right">
        ${
          this.favorite
            ? `<button class="btn btn-outline-danger" data-element="toggleFavorite">Remove</button>`
            : `<button class="btn btn-outline-success" data-element="toggleFavorite">Add to favorites</button>`
        }
      </div>
    </div>`;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.template;

    this.element = element.firstElementChild;
  }

  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll('[data-element]');

    for (const subElement of elements) {
      const name = subElement.dataset.element;

      result[name] = subElement;
    }

    this.subElements = result;
  }

  addEventListeners () {
    // this.element.addEventListener('error', event => {
    //   const img = event.target;
    //
    //   if (!img.src.includes('default-poster.png')) {
    //     img.src = '../../assets/default-poster.png';
    //   }
    // }, true);

    // if (this.subElements.toggleFavorite) {
    this.subElements.toggleFavorite.addEventListener('pointerdown', event => {
      this.toggleFavoriteButton(event.currentTarget);
    });
    // }
  }

  toggleFavoriteButton (btn) {
    // const dispatchFavoriteEvent = () => {
    //   this.element.dispatchEvent(new CustomEvent('toggle-favorite', {
    //     bubbles: true,
    //     detail: {
    //       id: this.id
    //     }
    //   }));
    // };

    // if (!this.isCollectionItem) {
      const isAdded = btn.classList.toggle('btn-outline-success');
      const isRemoved = btn.classList.toggle('btn-outline-danger');

      if (isAdded) {
        btn.innerText = 'Add to favorites';
      }

      if (isRemoved) {
        btn.innerText = 'Remove';
      }

      // dispatchFavoriteEvent();
    // } else {
    //   this.remove();
    // }
  }

  remove () {
    if (this.element) {
      // this.element.dispatchEvent(new CustomEvent('card-removed', {
      //   bubbles: true,
      //   detail: this.id
      // }))

      this.element.remove();
    }
  }

  destroy () {
    this.remove();
    this.element = null;
  }
}
