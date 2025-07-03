# Test Scenario: Add New Expense Popup Modal

## Implementation Status
- [ ] DONE Implementation

## Scenario Description
Test the functionality of the "Add New Expense" popup modal that allows users to add new expenses through a user-friendly interface triggered by the "Set Expense" button on the homepage.

## Test Steps
1. Navigate to the homepage while logged in to the application
2. Locate and click the "Set Expense" button
3. Verify the "Add New Expense" popup modal appears with all required form fields
4. Fill in the expense form with valid data (amount, category, description, date)
5. Submit the form and verify successful expense creation
6. Verify the popup closes and expense list updates
7. Test form validation by submitting invalid data
8. Test popup dismissal using close button and overlay click
9. Verify responsive behavior on different screen sizes

## Expected Results
- "Set Expense" button is visible and clickable on homepage
- Popup modal opens with proper form fields (amount, category, description, date)
- Form validation prevents invalid data submission
- Valid expense submission creates new expense and closes popup
- Expense list updates with new entry
- Error messages display for validation failures
- Popup can be dismissed via close button or overlay click
- Modal is responsive across different screen sizes
- Proper accessibility features (ARIA labels, keyboard navigation)

## Test Data
- Amount: 25.50
- Category: Food
- Description: Lunch at restaurant
- Date: Current date

## Test Credential for Logging In
- Email: huyen1@yopmail.com
- Password: password

## Prerequisites
- User must be logged in to the application
- Application server and database must be running
- Homepage must be accessible
- `/api/expenses` endpoint must be functional
- Toast notification system must be available

## Notes
- Test both successful and failed API responses
- Verify keyboard navigation and accessibility compliance
- Test edge cases like empty fields and invalid amounts
- Ensure proper error handling for network failures
- Validate that existing expenses remain unaffected