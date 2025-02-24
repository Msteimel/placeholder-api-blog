import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UpdatePost from "./updatePost";

describe("UpdatePost", () => {
  it("does not show form initially", () => {
    render(
      <UpdatePost post={{ id: 1, title: "Title", body: "Body", userId: 1 }} />,
    );

    // Check that form elements are not present
    const titleInput = screen.queryByLabelText(/title/i);
    const bodyTextarea = screen.queryByLabelText(/body/i);

    expect(titleInput).not.toBeInTheDocument();
    expect(bodyTextarea).not.toBeInTheDocument();
  });

  it("shows form when update button is clicked", () => {
    render(
      <UpdatePost post={{ id: 1, title: "Title", body: "Body", userId: 1 }} />,
    );

    // Find and click the update button
    const updateButton = screen.getByText(/update/i);
    fireEvent.click(updateButton);

    // Now check that form elements are present
    const titleInput = screen.getByLabelText(/title/i);
    const bodyTextarea = screen.getByLabelText(/body/i);

    expect(titleInput).toBeInTheDocument();
    expect(bodyTextarea).toBeInTheDocument();
  });

  it("initially renders the update button", () => {
    render(
      <UpdatePost post={{ id: 1, title: "Title", body: "Body", userId: 1 }} />,
    );

    const updateButton = screen.getByText(/update/i);
    expect(updateButton).toBeInTheDocument();
  });
});
