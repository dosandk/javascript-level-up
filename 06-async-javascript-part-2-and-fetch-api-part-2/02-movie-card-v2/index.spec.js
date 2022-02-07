import MovieCard from './index.js';

describe('MovieCard v2', () => {
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

  it('should dispatch "toggle-favorite" event', () => {

  });

  it('should dispatch "card-removed" event', () => {

  });

  it('should have ability to be destroyed', () => {
    component.destroy();

    expect(component.element).not.toBeInTheDocument();
  });
});
