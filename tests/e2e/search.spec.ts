import {test, expect} from '@playwright/test';
import {HomePage} from '../../src/pages/HomePage';
import {SearchResultPage} from '../../src/pages/SearchResultPage';

test.describe('Wikipedia Search Page', () => {
    let homePage: HomePage;
    let searchPage: SearchResultPage;

    test.beforeAll(async ({browser}): Promise<void> => {
        const page = await browser.newPage();
        homePage = new HomePage(page);
        searchPage = new SearchResultPage(page);
    });

    test.beforeEach(async () => {
        await homePage.navigate();
    });

    test.afterAll(async () => {
        await homePage.close();
    });

    test('should display correct search results for the query "Playwright"', async () => {
        const query = 'Playwright';
        await homePage.setLanguage('en');
        await homePage.search(query);

        await expect(searchPage.getHeadingText(), 'The heading text should match the search query').resolves.toMatch(query);
    });
});