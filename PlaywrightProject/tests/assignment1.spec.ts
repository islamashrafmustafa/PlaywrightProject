import { test, expect } from '@playwright/test';
test('errorMessage', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#root')).toContainText('Swag Labs');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('123456');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('removeCard', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#root')).toContainText('Swag Labs');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="inventory-list"]')).toContainText('$29.99');
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
});

