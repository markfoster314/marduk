import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownOption } from "./Dropdown";
import React, { useState } from "react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const countryOptions: DropdownOption[] = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

const fruitOptions: DropdownOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "mango", label: "Mango" },
];

export const Default: Story = {
  args: {
    options: fruitOptions,
    placeholder: "Select a fruit",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
  },
};

export const Required: Story = {
  args: {
    label: "Preferred Fruit",
    options: fruitOptions,
    placeholder: "Select a fruit",
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
    helperText: "Choose the country where you reside",
  },
};

export const WithError: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
    error: "Please select a country",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Dropdown",
    options: fruitOptions,
    placeholder: "Cannot select",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Dropdown",
    options: fruitOptions,
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Dropdown",
    options: fruitOptions,
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Large Dropdown",
    options: fruitOptions,
    size: "large",
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: "Fruit Selection",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana (Out of stock)", disabled: true },
      { value: "orange", label: "Orange" },
      { value: "grape", label: "Grape (Out of stock)", disabled: true },
      { value: "mango", label: "Mango" },
    ],
    placeholder: "Select a fruit",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
      }}
    >
      <Dropdown
        label="Small"
        options={fruitOptions}
        size="small"
        placeholder="Small dropdown"
      />
      <Dropdown
        label="Medium"
        options={fruitOptions}
        size="medium"
        placeholder="Medium dropdown"
      />
      <Dropdown
        label="Large"
        options={fruitOptions}
        size="large"
        placeholder="Large dropdown"
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selectedCountry, setSelectedCountry] = useState("");

    return (
      <div style={{ maxWidth: "400px" }}>
        <Dropdown
          label="Select Your Country"
          options={countryOptions}
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          placeholder="Choose a country"
          helperText="Your selection will be displayed below"
        />
        {selectedCountry && (
          <div
            style={{
              marginTop: "16px",
              padding: "12px",
              backgroundColor: "#e6f4ff",
              borderRadius: "4px",
            }}
          >
            <strong>Selected:</strong>{" "}
            {countryOptions.find((c) => c.value === selectedCountry)?.label}
          </div>
        )}
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      fruit: "",
      language: "",
    });

    const [errors, setErrors] = useState({
      country: "",
      fruit: "",
    });

    const languageOptions: DropdownOption[] = [
      { value: "en", label: "English" },
      { value: "es", label: "Spanish" },
      { value: "fr", label: "French" },
      { value: "de", label: "German" },
    ];

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const newErrors = {
        country: formData.country ? "" : "Please select a country",
        fruit: formData.fruit ? "" : "Please select a fruit",
      };

      setErrors(newErrors);

      if (!newErrors.country && !newErrors.fruit) {
        alert("Form submitted! " + JSON.stringify(formData, null, 2));
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "400px",
        }}
      >
        <Dropdown
          label="Country"
          options={countryOptions}
          value={formData.country}
          onChange={(e) => {
            setFormData({ ...formData, country: e.target.value });
            setErrors({ ...errors, country: "" });
          }}
          placeholder="Select your country"
          error={errors.country}
          required
        />

        <Dropdown
          label="Favorite Fruit"
          options={fruitOptions}
          value={formData.fruit}
          onChange={(e) => {
            setFormData({ ...formData, fruit: e.target.value });
            setErrors({ ...errors, fruit: "" });
          }}
          placeholder="Select a fruit"
          error={errors.fruit}
          required
        />

        <Dropdown
          label="Preferred Language"
          options={languageOptions}
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, language: e.target.value })
          }
          placeholder="Select a language"
          helperText="Optional"
        />

        <button
          type="submit"
          style={{ padding: "10px 20px", marginTop: "8px" }}
        >
          Submit
        </button>
      </form>
    );
  },
};
