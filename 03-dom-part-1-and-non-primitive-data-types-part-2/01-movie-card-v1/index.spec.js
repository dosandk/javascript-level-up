import MovieCard from './index.js';

describe('MovieCard v1', () => {
  let component;

  beforeEach(() => {
    component = new MovieCard();

    document.body.append(component.element);
  });

  afterEach(() => {
    component.destroy();
    component = null;
  });

  it('should be rendered correctly', () => {
    expect(component.element).toBeInTheDocument();
    expect(component.element).toBeVisible();
  });

  it('should have "getSubElements" method', () => {
    expect(Object.keys(component.subElements)).toBeTruthy();
    expect(component.getSubElements).toBeTruthy();
  });

  it('should have ability to be destroyed', () => {
    component.destroy();

    expect(component.element).not.toBeInTheDocument();
  });
});
