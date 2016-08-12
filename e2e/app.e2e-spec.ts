import { Rc5AppPage } from './app.po';

describe('rc5-app App', function() {
  let page: Rc5AppPage;

  beforeEach(() => {
    page = new Rc5AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
