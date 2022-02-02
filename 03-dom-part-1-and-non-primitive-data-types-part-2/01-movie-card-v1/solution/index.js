export default class MovieCard {
  constructor({
    genres = [],
    id = '',
    overview = '',
    popularity = '',
    poster_path = '',
    release_date = 0,
    title = ''
  } = {}) {
    this.id = id;
    this.genres = genres;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.title = title;

    this.render();
    this.getSubElements();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

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

  getTemplate() {
    return `
      <div class="card bg-light d-flex flex-fill">
        <div class="card-body">
          <div class="row">
            <div class="col-5 text-center">
              <img src="${this.poster_path}" loading="lazy" class="card-img-top" alt="${this.title}">
            </div>
            <div class="col-7">
              <a href="/movie-details/${this.id}">
                <h5 class="card-title" data-element="title">
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

              <p class="card-text" data-element="overview">
                ${this.overview}
              </p>

              <small class="text-muted">
                <b>Popularity:</b> ${parseFloat(this.popularity).toFixed(2)}
              </small>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  getGenres() {
    const result = this.genres.map(item => {
      return `<span>${item.name}</span>`
    })

    return result.join(' ');
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
