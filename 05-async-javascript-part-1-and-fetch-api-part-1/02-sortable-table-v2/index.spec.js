import SortableTable from './index.js';

const config = [
  {
    id: 'foo',
    title: 'Foo',
    sortable: true,
    sortType: 'string'
  },
  {
    id: 'bar',
    title: 'Bar',
    sortable: true,
    sortType: 'number'
  }
];

const data = [
  {
    foo: 'b',
    bar: 2
  },
  {
    foo: 'c',
    bar: 1
  },
  {
    foo: 'a',
    bar: 3
  },

];

describe('SortableTable', () => {
  let sortableTable;

  beforeEach(() => {
    sortableTable = new SortableTable(config, {
      data
    });

    document.body.append(sortableTable.element);
  });

  afterEach(() => {
    sortableTable.destroy();
    sortableTable = null;
  });

  it('should be rendered correctly', () => {
    expect(sortableTable.element).toBeInTheDocument();
    expect(sortableTable.element).toBeVisible();
  });

  it('should render data correctly', () => {
    const rows = sortableTable.element.querySelectorAll('tr.d-flex');

    expect(rows.length).toBe(4);
  });

  it('should have ability to sort data by first column', () => {
    const headerCells = sortableTable.element.querySelectorAll('th.col[data-sortable]');
    const [firstCell] = [...headerCells];

    const pointerdown = new MouseEvent('pointerdown', {
      bubbles: true
    });

    firstCell.dispatchEvent(pointerdown);

    console.error(sortableTable.subElements.body.outerHTML);

    const bodyCells = sortableTable.element.querySelectorAll('td.col');
    const [firstColumnCell, secondColumnCell] = [...bodyCells];

    expect(firstColumnCell.textContent).toBe('c');
    expect(secondColumnCell.textContent).toBe('1');
  });

  it('should have ability to be removed from DOM', () => {
    sortableTable.remove();

    expect(sortableTable.element).not.toBeInTheDocument();
  });
});
