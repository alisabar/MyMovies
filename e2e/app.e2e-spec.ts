import { MyMoviesPage } from './app.po';

describe('my-movies App', () => {
  let page: MyMoviesPage;

  beforeEach(() => {
    page = new MyMoviesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
