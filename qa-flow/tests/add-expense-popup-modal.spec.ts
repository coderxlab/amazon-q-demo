import { test, expect } from '@playwright/test';

test.describe('Add New Expense Popup Modal', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('http://localhost:5001');
    
    // Navigate to login page
    await page.getByRole('link', { name: 'Get Started' }).click();
    
    // Login with test credentials
    await page.getByRole('textbox', { name: 'Username or Email' }).fill('huyen1@yopmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Wait for dashboard to load
    await expect(page).toHaveURL('http://localhost:5001/dashboard');
    await expect(page.getByRole('heading', { name: /Good morning.*huyen1@yopmail.com/ })).toBeVisible();
  });

  test('should open and display Add New Expense popup modal with all required fields', async ({ page }) => {
    // Click Add Expense button
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Verify popup modal appears
    await expect(page.getByRole('dialog', { name: 'Add New Expense' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Add New Expense' })).toBeVisible();
    
    // Verify form fields are present
    await expect(page.getByRole('spinbutton', { name: 'Amount (USD)' })).toBeVisible();
    await expect(page.getByRole('combobox').first()).toBeVisible(); // Category dropdown
    await expect(page.getByRole('button', { name: /June.*2025/ })).toBeVisible(); // Date picker
    await expect(page.getByRole('button', { name: 'Add Expense' })).toBeVisible();
    
    // Verify tabs are present
    await expect(page.getByRole('tab', { name: 'Manual Entry' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Upload Invoice' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Manual Entry' })).toHaveAttribute('aria-selected', 'true');
  });

  test('should successfully add a new expense with valid data', async ({ page }) => {
    // Get initial expense total
    const initialTotal = await page.locator('text=Total Expenses').locator('..').locator('paragraph').textContent();
    
    // Open popup modal
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Fill in expense form
    await page.getByRole('spinbutton', { name: 'Amount (USD)' }).fill('25.50');
    
    // Select category
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'Food' }).click();
    
    // Submit form
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Verify popup closes
    await expect(page.getByRole('dialog', { name: 'Add New Expense' })).not.toBeVisible();
    
    // Verify success notification appears
    await expect(page.getByText('Expense logged successfully')).toBeVisible();
    
    // Verify expense appears in the list
    await expect(page.getByText('Food')).toBeVisible();
    await expect(page.getByText('$25.50')).toBeVisible();
    await expect(page.getByText('Jun 30, 2025')).toBeVisible();
    
    // Verify total expenses updated
    await expect(page.locator('text=Total Expenses').locator('..').locator('paragraph')).not.toHaveText(initialTotal || '');
  });

  test('should prevent form submission with empty required fields', async ({ page }) => {
    // Open popup modal
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Try to submit empty form
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Verify popup remains open (form validation prevents submission)
    await expect(page.getByRole('dialog', { name: 'Add New Expense' })).toBeVisible();
    
    // Verify no success notification appears
    await expect(page.getByText('Expense logged successfully')).not.toBeVisible();
  });

  test('should close popup when clicking the close button', async ({ page }) => {
    // Open popup modal
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Verify popup is open
    await expect(page.getByRole('dialog', { name: 'Add New Expense' })).toBeVisible();
    
    // Click close button
    await page.getByRole('button', { name: 'Close' }).click();
    
    // Verify popup closes
    await expect(page.getByRole('dialog', { name: 'Add New Expense' })).not.toBeVisible();
  });

  test('should display category dropdown options', async ({ page }) => {
    // Open popup modal
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Click category dropdown
    await page.getByRole('combobox').first().click();
    
    // Verify category options are available
    await expect(page.getByRole('option', { name: 'Food' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Transportation' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Housing' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Entertainment' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Other' })).toBeVisible();
  });

  test('should handle multiple expense additions correctly', async ({ page }) => {
    // Add first expense
    await page.getByRole('button', { name: 'Add Expense' }).click();
    await page.getByRole('spinbutton', { name: 'Amount (USD)' }).fill('15.00');
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'Transportation' }).click();
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Wait for first expense to be added
    await expect(page.getByText('Expense logged successfully')).toBeVisible();
    
    // Add second expense
    await page.getByRole('button', { name: 'Add Expense' }).click();
    await page.getByRole('spinbutton', { name: 'Amount (USD)' }).fill('30.00');
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'Entertainment' }).click();
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Verify both expenses appear in the list
    await expect(page.getByText('Transportation')).toBeVisible();
    await expect(page.getByText('Entertainment')).toBeVisible();
    await expect(page.getByText('$15.00')).toBeVisible();
    await expect(page.getByText('$30.00')).toBeVisible();
  });

  test('should reset form fields when reopening popup', async ({ page }) => {
    // Open popup and fill form
    await page.getByRole('button', { name: 'Add Expense' }).click();
    await page.getByRole('spinbutton', { name: 'Amount (USD)' }).fill('50.00');
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'Food' }).click();
    
    // Close popup without submitting
    await page.getByRole('button', { name: 'Close' }).click();
    
    // Reopen popup
    await page.getByRole('button', { name: 'Add Expense' }).click();
    
    // Verify form fields are reset
    await expect(page.getByRole('spinbutton', { name: 'Amount (USD)' })).toHaveValue('');
    await expect(page.getByRole('combobox').first()).toContainText('Select category');
  });
});