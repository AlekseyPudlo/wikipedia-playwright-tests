import test, { expect } from "@playwright/test";

test.describe('API Test Example', () => {
    test('should be able to get the list of users', async ({ request }) => {
        await fetchAndValidate(request, 'https://jsonplaceholder.typicode.com/users');
    });

    test('should be able to get the list of posts', async ({ request }) => {
        await fetchAndValidate(request, 'https://jsonplaceholder.typicode.com/posts');
    });

    test('should be able to get the list of comments', async ({ request }) => {
        await fetchAndValidate(request, 'https://jsonplaceholder.typicode.com/comments');
    });

    test('should be able to get the list of albums', async ({ request }) => {
        await fetchAndValidate(request, 'https://jsonplaceholder.typicode.com/albums');
    });

    const fetchAndValidate = async (request: any, url: string) => {
        const response = await request.get(url);
        if (!response.ok()) {
            throw new Error(`Failed to fetch from ${url}`);
        }
        const data = await response.json();
        expect(data).not.toBeNull();
        expect(data.length).toBeGreaterThan(0);
        return data;
    };
});