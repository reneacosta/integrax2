import { Integrax2Page } from './app.po';

describe('integrax2 App', function() {
  let page: Integrax2Page;

  beforeEach(() => {
    page = new Integrax2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
