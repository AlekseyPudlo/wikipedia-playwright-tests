import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";

export class SearchResultPage extends BasePage {
    readonly heading: Locator;

    constructor(page: any) {
        super(page);
        this.heading = this.page.locator('#firstHeading');
    }

    async getHeadingText(): Promise<string> {
        const text = await this.heading.textContent();
        return text !== null ? text : '';
    }
}