import { Box } from "@/components/Box/Box";
import { TextInput } from "@/components/TextInput/TextInput";
import { Text } from "@/components/Text/Text";
import { CSSProperties, useState } from "react";
import { AutocompleteProps } from "./Autocomplete.types";
import "./Autocomplete.css";

export const Autocomplete = ({
  options,
  value,
  onChange,
  placeholder = "Type to search...",
  disabled,
  ...props
}: AutocompleteProps & { style?: CSSProperties }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    onChange?.(newValue);
  };

  const handleSelect = (option: { value: string; label: string }) => {
    setInputValue(option.label);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <Box className="marduk-autocomplete" {...props}>
      <TextInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && filteredOptions.length > 0 && (
        <Box className="marduk-autocomplete-dropdown">
          {filteredOptions.map((option) => (
            <Box
              key={option.value}
              className="marduk-autocomplete-option"
              onClick={() => handleSelect(option)}
              role="option"
            >
              <Text>{option.label}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
