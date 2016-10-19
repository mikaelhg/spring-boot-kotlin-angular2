import { SpringBootKotlinAngular2Page } from './app.po';

describe('spring-boot-kotlin-angular2 App', function() {
  let page: SpringBootKotlinAngular2Page;

  beforeEach(() => {
    page = new SpringBootKotlinAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
