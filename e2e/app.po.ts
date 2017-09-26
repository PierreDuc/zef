import { browser, element, by } from 'protractor';
import {promise} from 'selenium-webdriver';

export class ZefAssignmentPage {
  navigateTo(): promise.Promise<any> {
    return browser.get('/build');
  }

  getParagraphText() {
    return element(by.css('.app-title')).getText();
  }
}
