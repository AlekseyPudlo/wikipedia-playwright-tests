
import { Page } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigate(relativeUrl: string = '/') {
        await this.page.goto(relativeUrl);
    }

    public async getTitle() {
        return await this.page.title();
    }

    public async getCurrentUrl() {
        return await this.page.url();
    }

    public async reload(
        options?:
          | {
              timeout?: number;
              waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
            }
          | undefined,
      ): Promise<void> {
        await this.page.reload(options);
    }

    public async goBack() {
        await this.page.goBack();
    }

    public async goForward() {
        await this.page.goForward();
    }

    public async close() {
        await this.page.close();
    }
}