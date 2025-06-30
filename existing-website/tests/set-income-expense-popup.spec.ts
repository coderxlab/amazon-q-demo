import { test, expect } from '@playwright/test';

test.describe('Set Income Button Opens Add New Expense Popup', () => {
  test('should open Add New Expense popup when clicking Add Expense button', async ({ page }) => {
    // Navigate to the application login page
    await page.goto('http://localhost:5001');
    
    // Click Get Started to go to auth page
    await page.getByRole('link', { name: 'Get Started' }).click();
    
    // Enter valid username and password
    await page.getByRole('textbox', { name: 'Username or Email' }).fill('huyen1@yopmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    
    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Verify successful login by checking we're on dashboard
    await expect(page).toHaveURL('http://localhost:5001/dashboard');
    await expect(page.getByText('Good evening • Sunday, huyen1@yopmail.com')).toBeVisible();
    
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');
    
    // Locate the "Add Expense" button (Note: Test scenario mentions "Set Income" but actual button is "Add Expense")
    const addExpenseButton = page.getByRole('button', { name: 'Add Expense' });
    await expect(addExpenseButton).toBeVisible();
    
    // Click the "Add Expense" button
    await addExpenseButton.click();
    
    // Verify that the "Add New Expense" popup appears
    const popup = page.getByRole('dialog', { name: 'Add New Expense' });
    await expect(popup).toBeVisible();
    
    // Confirm the popup contains expected form elements
    await expect(popup.getByRole('heading', { name: 'Add New Expense' })).toBeVisible();
    await expect(popup.getByRole('spinbutton', { name: 'Amount (USD)' })).toBeVisible();
    await expect(popup.getByText('Category')).toBeVisible();
    await expect(popup.getByText('Date')).toBeVisible();
    await expect(popup.getByRole('button', { name: 'Add Expense' })).toBeVisible();
    
    // Verify the popup has a close button
    const closeButton = popup.getByRole('button', { name: 'Close' });
    await expect(closeButton).toBeVisible();
    
    // Test that the close button works
    await closeButton.click();
    await expect(popup).not.toBeVisible();
  });
});