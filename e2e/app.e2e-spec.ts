import { ZefAssignmentPage } from './app.po';

describe('zef-assignment App', function() {
  let page: ZefAssignmentPage;

  beforeEach(() => {
    page = new ZefAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
