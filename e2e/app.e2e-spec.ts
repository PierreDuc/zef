import { ZefAssignmentPage } from './app.po';
import {AppTitle} from '../src/app/core/const/app-title.const';

describe('zef-assignment App', function() {
  let page: ZefAssignmentPage;

  beforeEach(() => {
    page = new ZefAssignmentPage();
  });

  it(`should display text saying ${AppTitle}`, async () => {
    await page.navigateTo();
    expect(page.getParagraphText()).toEqual(AppTitle);
  });
});
