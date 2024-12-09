import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";

export class HomePage extends BasePage {
    readonly languageSelector: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    
    constructor(page: any) {
        super(page);
        this.languageSelector = this.page.locator('select#searchLanguage');
        this.searchInput = this.page.locator('input[name="search"]');
        this.searchButton = this.page.locator('button[type="submit"]');
    }

    async open(): Promise<void> {
        await this.page.goto('/');
    }

    async setLanguage(langCode: string): Promise<void> {
        await this.languageSelector.selectOption(langCode);
    }

    async search(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }
}