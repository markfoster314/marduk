import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";

describe("Table", () => {
  const sampleData = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
  ];

  const sampleColumns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
  ];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Table columns={sampleColumns} data={sampleData} />);
      expect(container.querySelector(".marduk-table")).toBeInTheDocument();
    });

    it("renders all column headers", () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("renders all data rows", () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("jane@example.com")).toBeInTheDocument();
    });
  });
});
