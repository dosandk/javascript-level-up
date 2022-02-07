import { processData } from '../utils/index.js';

const BACKEND_URL = 'http://demo.bootcamp.place/api/';

async function foo () {

}

export default class CardsList {
  element;
  subElements = {}

  constructor({
    CardComponent,
    url = '',
  } = {}) {
    this.url = new URL(url, BACKEND_URL);
    this.CardComponent = CardComponent;

    this.initialize();
  }

  async initialize () {
    this.render();

    const data = await this.loadData();

    this.getSubElements();
    this.update(data);
  }

  async loadData () {
    const response = await fetch(this.url);
    const {data = [], error = ''} = await response.json();

    if (error) {
      console.error(error);
    }

    return data.map(processData);
  }

  get template() {
    return `<div class="card">
      <div class="card-body pb-0">
        <div class="row" data-element="row">

        </div>
      </div>
    </div>`
  }

  render () {
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

  get emptyTemplate() {
    return `<div class="col-12 d-flex text-center flex-column mb-3">No data</div>`
  }

  update (data = []) {
    const { row } = this.subElements;

    if (data.length) {
      this.data = data;
      const list  = this.getCardsList(data);

      row.replaceChildren(list);
    } else {
      row.innerHTML = this.emptyTemplate;
    }

    // this.getSubElements();
  }

  getCardsList (data) {
    const documentFragment = document.createDocumentFragment();
    const list = data.map(item => {
      const result = new this.CardComponent(item).element;
      const element = document.createElement('div');

      element.innerHTML = `
        <div data-element="${item.id}"
          class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch flex-column mb-3"></div>
      `;

      element.firstElementChild.append(result);

      return element.firstElementChild;
    });

    list.forEach(item => {
      documentFragment.append(item);
    })

    return documentFragment;
  }

  remove () {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy () {
    this.remove();
    this.element = null;
    this.subElements = {};
  }
}
