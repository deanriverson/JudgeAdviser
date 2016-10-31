import { JudgeAdvisorPage } from './app.po';

describe('judge-advisor App', function() {
  let page: JudgeAdvisorPage;

  beforeEach(() => {
    page = new JudgeAdvisorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
