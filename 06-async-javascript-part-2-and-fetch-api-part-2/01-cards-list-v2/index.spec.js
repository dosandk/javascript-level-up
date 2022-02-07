import CardsList from './index.js';

describe('CardsList v2', () => {
  let component;

  beforeEach(() => {
    component = new CardsList();

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

  it('should have ability to be destroyed', () => {
    component.destroy();

    expect(component.element).not.toBeInTheDocument();
  });
});
