import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { TIME_UNITS } from 'src/utils/constants';

let page;
let homePage: HomePage;

test.beforeAll(async ({ browser }): Promise<void> => {
    page = await browser.newPage();
    homePage = new HomePage(page);
});

test.describe('Wikipedia Home Page', () => {
    test.setTimeout(TIME_UNITS.EIGHTY_SECONDS);

    test.beforeEach(async () => {
        await homePage.navigate();
    });

    test.afterAll(async () => {
        await homePage.close();
    });

    test('should display the correct title and have all main elements visible', async () => {
        await homePage.open();

        await expect(homePage.getTitle()).resolves.toMatch('Wikipedia');

        await expect(homePage.languageSelector).toBeVisible();
        await expect(homePage.searchInput).toBeVisible();
        await expect(homePage.searchButton).toBeVisible();
    });

    test('should be able to set the language', async () => {
        const langCode = 'uk';

        await homePage.setLanguage(langCode);

        await expect(homePage.languageSelector).toHaveValue(langCode);
    });
});