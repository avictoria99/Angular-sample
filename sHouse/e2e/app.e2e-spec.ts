import { SHousePage } from './app.po';

describe('s-house App', () => {
  let page: SHousePage;

  beforeEach(() => {
    page = new SHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
