import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "../footer";
import { REMOVE_COMPLETED_ITEMS } from "../../constants";
import { MemoryRouter } from "react-router-dom";

describe("Footer component", () => {
  // Test case 1: Rendering with initial todos
  it("Renders correctly with initial todos", () => {
    const todos = [{ id: 1, text: "Task 1", completed: false }];
    const dispatch = jest.fn();

    render(
      <MemoryRouter>
        <Footer todos={todos} dispatch={dispatch} />
      </MemoryRouter>
    );

    // Assertions about rendered elements and content
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText("1 item left!")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Clear completed")).toBeDisabled();
  });

  // Test case 2: Rendering with empty todo list
  it("Does not render when there are no todos", () => {
    const todos = [];
    const dispatch = jest.fn();

    render(
      <MemoryRouter>
        <Footer todos={todos} dispatch={dispatch} />
      </MemoryRouter>
    );

    // Assert that the footer element is not rendered
    expect(screen.queryByTestId("footer")).not.toBeInTheDocument();
  });

  // Test case 3: Clearing completed todos
  it("Dispatches REMOVE_COMPLETED_ITEMS action when the clear button is clicked", () => {
    const todos = [{ id: 1, text: "Task 1", completed: true }];
    const dispatch = jest.fn();

    render(
      <MemoryRouter>
        <Footer todos={todos} dispatch={dispatch} />
      </MemoryRouter>
    );

    const clearButton = screen.getByTestId("clear-completed");
    fireEvent.click(clearButton);

    expect(dispatch).toHaveBeenCalledWith({ type: REMOVE_COMPLETED_ITEMS });
  });

  // Test case 4: Disabling clear button when all todos are active
  it("Disables the clear button when all todos are active", () => {
    const todos = [{ id: 1, text: "Task 1", completed: false }];
    const dispatch = jest.fn();

    render(
      <MemoryRouter>
        <Footer todos={todos} dispatch={dispatch} />
      </MemoryRouter>
    );

    const clearButton = screen.getByTestId("clear-completed");
    expect(clearButton).toBeDisabled();
  });
});
