import test, { expect } from "@playwright/test";

test.describe('API Test Example', () => {
    test('should be able to get the list of users', async ({ page }) => {
        const response = await page.goto('https://jsonplaceholder.typicode.com/users');
        if (!response) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();

        expect(users).not.toBeNull();
        expect(users.length).toBeGreaterThan(0);
    });

    test('should be able to get the list of posts', async ({ page }) => {
        const response = await page.goto('https://jsonplaceholder.typicode.com/posts');
        if (!response) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();

        expect(posts).not.toBeNull();
        expect(posts.length).toBeGreaterThan(0);
    });
});