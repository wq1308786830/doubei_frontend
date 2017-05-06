import { DoubeiFrontendPage } from './app.po';

describe('doubei_frontend App', () => {
  let page: DoubeiFrontendPage;

  beforeEach(() => {
    page = new DoubeiFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
