# Footer Component Unit Tests

This directory contains unit tests for the Footer component, ensuring its functionality and robustness.

## Test Cases

1. **Renders correctly with initial todos:** Verifies that the component renders with the correct elements and content when provided with initial todos.
2. **Does not render when there are no todos:** Ensures that the component doesn't render if there are no todos to display.
3. **Dispatches REMOVE_COMPLETED_ITEMS action when the clear button is clicked:** Tests that the component dispatches the correct action to clear completed todos when the "Clear completed" button is clicked.
4. **Disables clear button when all todos are active:** Verifies that the "Clear completed" button is disabled when there are no completed todos.

## Running the Tests

1. Install the necessary testing libraries:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom
   ```
